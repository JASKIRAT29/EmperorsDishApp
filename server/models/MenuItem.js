// Import required libraries
const mongoose = require('mongoose');

// Define schema for menu items
const menuItemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true
  },
  category: {
    type: String,
    enum: ['appetizers', 'entrees', 'desserts', 'drinks'],
    required: true
  },
  image: {
    type: String
  },
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Review'
  }]
});

// Create model for menu items
const MenuItem = mongoose.model('MenuItem', menuItemSchema);

// Export model for menu items
module.exports = MenuItem;
