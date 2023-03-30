// Import required libraries
const mongoose = require('mongoose');
const orderItemSchema = require('./OrderItem')

// Define schema for orders
const orderSchema = new mongoose.Schema({
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  items: {
    type:[orderItemSchema],
    require:true
  },
  total: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'preparing', 'ready', 'delivered', 'canceled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model for orders
const Order = mongoose.model('Order', orderSchema);

// Export model for orders
module.exports = Order;
