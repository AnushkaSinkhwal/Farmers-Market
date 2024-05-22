require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const { MongoClient } = require("mongodb");
const userRoutes = require("./routes/users");
const farmerRoutes = require("./routes/farmers");
const commentRoutes = require("./routes/comments");
const productsRoutes = require("./routes/product");
const {
  deleteUser,
  getUsers,
  getUser,
} = require("./controllers/userController");
const {
  deleteFarmer,
  getFarmers,
  getFarmer,
} = require("./controllers/farmerController");
const { createComment } = require("./controllers/commentController");

//express app
const app = express();

//middleware
app.use(express.json());

//cors
app.use(
  cors({
    origin: 'http://localhost:3000',
    methods: ["GET", "POST", "PATCH", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

//routes
app.use("/api/users", userRoutes);
app.use("/api/farmers", farmerRoutes);
app.use("/api/comments", commentRoutes);
app.use("/api/products", productsRoutes);

// Connection URI
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });

//Server

const PORT = process.env.PORT || 3002;
app.listen(process.env.PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
