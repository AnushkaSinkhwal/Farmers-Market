const mongoose = require('mongoose');

// Define the schema for the Cart model
const cartSchema = new mongoose.Schema({
  product: {
    type: String,
     required: true
  },
  price : {
    type : Number, 
    required : true
  },

  image : {
    type : String, 
    require : true
  },

  quantity: {
    type: Number,
    required: true
  },
});

// Create the Cart model
const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
