const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const Procuct = require ('../models/productModel')
const cart = require ('../models/cartModel')

router.post('/products/add', productController.createProduct);
router.get('/products', productController.getProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

module.exports = router;
