const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products/add', productController.createProduct);
router.get('/products', productController.getAllProducts);
router.get('/products/:id', productController.getProductById);
router.put('/products/:id', productController.updateProduct);
router.delete('/products/:id', productController.deleteProduct);

router.get('/path', (req, res) => {
  // Handle the GET request logic here
  res.send('Hello World!');
});

module.exports = router;