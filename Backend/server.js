require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes/routes.js');
const { MongoClient } = require('mongodb');
const bodyParser = require("body-parser");
const Product = require("./models/productModel.js");
const path = require('path');
const fs = require('fs');

//express app
const app = express()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  console.log("Hello");
})

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


// Route to retrieve the image URL
app.get('/api/products/image', (req, res) => {
  // Retrieve the image URL from the file or database
  // Example: Read from a file
  const imageData = fs.readFileSync('imageData.txt', 'utf-8');

  res.status(200).send(imageData);
});
//middleware

app.use(bodyParser.json())
app.use('/api', routes);

//cors
const corsOptions = {
  origin: 'http://localhost:8000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow these HTTP methods
  credentials: true, // Allow sending cookies
};

app.use(cors(corsOptions));

app.use((req, res, next)=>{
    console.log(req.path, req.method)
    next()
})

//routes

const productRoutes = require('./routes/routes.js');
const userRoutes = require('./routes/users.js');
const farmerRoutes = require('./routes/farmers.js')

app.use('/api', routes);
app.use('/api/user', userRoutes);
app.use('/api/farmers', farmerRoutes);
app.use('/api/products', productRoutes);

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