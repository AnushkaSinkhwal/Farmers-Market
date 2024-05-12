require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes.js');
const bodyParser = require("body-parser");
const path = require('path');
const fs = require('fs');
const Product = require("./models/productModel.js");
const Cart = require("./models/cartModel");
const checkoutFormRoutes = require('./routes/checkoutForm');

//express app
const app = express()

//middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(cors())

//routes
const productRoutes = require('./routes/routes.js');
const userRoutes = require('./routes/users.js');
const farmerRoutes = require('./routes/farmers.js');

app.use('/api', routes);
app.use('/api/checkoutForm', checkoutFormRoutes);
app.use('/api/user', userRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/products', productRoutes);

app.get('/', (req, res) => {
  console.log("Hello");
})

const myMiddleware = (req, res, next) => {
  // Middleware logic
  next(); // Call next to pass control to the next middleware function
};
app.use(myMiddleware)

app.post('/api/log/hover', (req, res) => {
  const { imageId } = req.body;
  // Log the hover event to your database or perform any desired action
  console.log(`Hover event logged for image with ID: ${imageId}`);
  res.sendStatus(200); // Send a response indicating success
});

app.post('/api/products/add', async (req, res) => {
  try {
    const { productName, category, productPrice, unit, productImage, productQuantity, productDescription } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      productName,
      category,
      productPrice,
      unit,
      productImage,
      productQuantity,
      productDescription
    });

    // Save the product to the database
    await newProduct.save();

    res.status(201).json({ message: 'Product added successfully', product: newProduct });
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Failed to add product' });
  }
});

app.put('/api/products/update', async (req, res) => {
  try {
    const { productName, category, productPrice, unit, productImage, productQuantity, productDescription } = req.body;

    // Find the product by name
    const product = await Product.findOne({ productName });

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    // Update the product fields
    product.category = category;
    product.productPrice = productPrice;
    product.unit = unit;
    product.productImage = productImage;
    product.productQuantity = productQuantity;
    product.productDescription = productDescription;

    // Save the updated product
    await product.save();

    // Return success response
    res.json({ message: 'Product updated successfully' });
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Serve vegetables.json
app.get("/api/vegetables", (req, res) => {
  fs.readFile("vegetables.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const vegetables = JSON.parse(data);
    res.json(vegetables);
  });
});

// Serve fruits.json
app.get("/api/fruits", (req, res) => {
  fs.readFile("fruits.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const fruits = JSON.parse(data);
    res.json(fruits);
  });
});

// Serve dairy.json
app.get("/api/dairy", (req, res) => {
  fs.readFile("dairy.json", "utf8", (err, data) => {
    if (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
      return;
    }
    const dairy = JSON.parse(data);
    res.json(dairy);
  });
});

// Route to retrieve the image URL
app.get('/api/products/image', (req, res) => {
  // Retrieve the image URL from the file or database
  // Example: Read from a file
  const imageData = fs.readFileSync('imageData.txt', 'utf-8');

  res.status(200).send(imageData);
});

app.get('/api/products/search', async (req, res) => {
  try {
    const searchQuery = req.query.q; // Get the search query from the query string
    const regex = new RegExp(searchQuery, 'i'); // Create case-insensitive regex for search

    // Query the database for products matching the search query
    const matchingProducts = await Product.find({ name: regex });

    res.json(matchingProducts);
  } catch (error) {
    console.error('Error searching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

//cors
const corsOptions = {
  origin: 'http://localhost:8000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true, // Allow sending cookies
};

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});

// Connection URI
const PORT = process.env.PORT || 8000;

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
  app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
  });
})
.catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});