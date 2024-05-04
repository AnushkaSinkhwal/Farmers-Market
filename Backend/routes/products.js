const express = require("express");
const mongoose = require("mongoose");
const Product = require("../models/Products");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const {
      productName,
      category,
      productPrice,
      unit,
      productImage,
      productQuantity,
      productDescription,
    } = req.body;

    if (!productName || !category || !productPrice || !unit || !productImage || !productQuantity || !productDescription) {
      return res.status(400).json({ message: "Missing required fields." });
    }

    if (typeof productPrice !== "number" || typeof productQuantity !== "number") {
      return res.status(400).json({ message: "Invalid product price or quantity." });
    }

    const product = new Product({
      productName,
      category,
      productPrice,
      unit,
      productImage,
      productQuantity,
      productDescription,
    });

    await product.save();

    res.status(201).json({ message: "Product added successfully." });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error." });
  }
});

module.exports = router;