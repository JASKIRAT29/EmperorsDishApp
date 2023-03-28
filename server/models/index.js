// Import required libraries
const mongoose = require('mongoose');

// Import restaurant models
const MenuItem = require('./menu-item');
const Order = require('./order');
const Reservation = require('./reservation');
const Review = require('./review');

// Export restaurant models
module.exports = {
  MenuItem,
  Order,
  Reservation,
  Review
};
