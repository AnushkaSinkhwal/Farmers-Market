const mongoose = require('mongoose');

const CheckoutFormSchema = new mongoose.Schema({
  fullName: { 
    type: String,
     required: true },
  address: { 
    type: String,
     required: true },
  phoneNumber: { // Add phoneNumber field
    type: String, // Assuming phoneNumber is stored as a string
     required: true },
  paymentMethod: { 
    type: String, 
    required: true },
  // Add more fields as needed
});

const CheckoutForm = mongoose.model('CheckoutForm', CheckoutFormSchema);

module.exports = CheckoutForm;
