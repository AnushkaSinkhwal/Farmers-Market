const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");

// Get a product by ID
router.get('/:id', productController.getProduct);

// Get all products
router.get('/', productController.getProducts);

// Create a new product
router.post('/createProduct', productController.addProduct);

// Delete a product by ID
router.delete('/deleteProduct/:id', productController.deleteProduct);

// Update a product by ID
router.patch('/updateProduct/:id', productController.updateProduct);

module.exports = router;
