const express = require('express');
const CheckoutForm = require('../models/checkoutFormModel');

const router = express.Router();

// Route to handle form submission
router.post('/submit-form', async (req, res) => {
  try {
    const { fullName, address, paymentMethod } = req.body;

    // Create a new instance of the CheckoutForm model
    const newCheckout = new CheckoutForm({
      fullName,
      address,
      paymentMethod,
      // Add more fields as needed
    });

    // Save the data to the database
    await newCheckout.save();

    res.status(201).json({ message: 'Checkout form data saved successfully', data: newCheckout });
  } catch (error) {
    console.error('Error saving checkout form data:', error);
    res.status(500).json({ error: 'Failed to save checkout form data' });
  }
});

module.exports = router;
