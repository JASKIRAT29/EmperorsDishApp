// Import required libraries
const mongoose = require('mongoose');

// Define schema for reservations
const reservationSchema = new mongoose.Schema({
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  partySize: {
    type: Number,
    required: true
  },
  customerName: {
    type: String,
    required: true
  },
  customerEmail: {
    type: String,
    required: true
  },
  customerPhone: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'canceled'],
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

// Create model for reservations
const Reservation = mongoose.model('Reservation', reservationSchema);

// Export model for reservations
module.exports = Reservation;
