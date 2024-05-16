const express = require('express');
const router = express.Router();
const Cart = require('../models/cartModel');

router.post('/add-to-cart', async (req, res) => {
  try {
    const { product, price, image, quantity } = req.body;

    const newItem = new Cart({
      product,
      price,
      image,
      quantity
    });

    // Save the new item to the database
    await newItem.save();

    res.status(201).json({ message: 'Item added to cart successfully', item: newItem });
  } catch (error) {
    console.error('Error adding item to cart:', error);
    res.status(500).json({ error: 'Failed to add item to cart' });
  }
});

module.exports = router;
