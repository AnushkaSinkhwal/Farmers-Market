const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['vegetable', 'fruit', 'dairy'],
    required: true
  },
  productPrice: {
    type: Number,
    required: true
  },
  unit: {
    type: String,
    enum: ['kg', 'item', 'liter'],
    required: true
  },
  productImage: {
    type: String,
    required: true
  },
  productQuantity: {
    type: Number,
    required: true
  },
  productDescription: {
    type: String,
    required: true
  }
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;
