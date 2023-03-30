// Import required libraries
const mongoose = require('mongoose');

// Import restaurant models
const MenuItem = require('./MenuItem');
const Order = require('./Order');
const Review = require('./Review');

// Export restaurant models
module.exports = {
  MenuItem,
  Order,
  Review
};
