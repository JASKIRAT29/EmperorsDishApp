// Import required libraries
const mongoose = require('mongoose');

// Define schema for orders
const orderItemSchema = new mongoose.Schema({
  item: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'MenuItem',
    required: true
  },
  quantity: {
    type: Number,
    required: true
  }
});

const OrderItem = mongoose.model('OrderItem', orderItemSchema);

module.exports = OrderItem;