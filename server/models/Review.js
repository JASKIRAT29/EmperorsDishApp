// Import required libraries
const mongoose = require('mongoose');

// Define schema for reviews
const reviewSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true
  },
  comment: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model for reviews
const Review = mongoose.model('Review', reviewSchema);

// Export model for reviews
module.exports = Review;
