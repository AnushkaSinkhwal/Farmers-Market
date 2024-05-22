const Product = require('../models/productModel');
const mongoose = require('mongoose')

exports.createProduct = async (req, res) => {
  try {
    const { productName, category, productPrice, unit, productImage, productQuantity, productDescription } = req.body;
    const newProduct = new Product({
      productName,
      category,
      productPrice,
      unit,
      productImage,
      productQuantity,
      productDescription
    });
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error('Error adding product:', error.message);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, data: products });
  } catch (err) {
    console.error('Error fetching products:', err.message);
    console.error(err.stack);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: product });
  } catch (err) {
    console.error('Error fetching product:', err.message);
    console.error(err.stack);
    res.status(500).json({ success: false, error: err.message });
  }
};

exports.updateProduct = async (req, res) => {
  try {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, error: 'Invalid product ID' });
    }
    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedProduct) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: updatedProduct });
  } catch (err) {
    console.error('Error updating product:', err.message);
    console.error(err.stack);
    res.status(500).json({ success: false, error: err.message });
  }
};


exports.deleteProduct = async (req, res) => {
  try {
    if (!req.params.id || !mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({ success: false, error: 'Invalid product ID' });
    }
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) {
      return res.status(404).json({ success: false, error: 'Product not found' });
    }
    res.status(200).json({ success: true, data: deletedProduct });
  } catch (err) {
    console.error('Error deleting product:', err.message);
    console.error(err.stack);
    res.status(500).json({ success: false, error: err.message });
  }
};
