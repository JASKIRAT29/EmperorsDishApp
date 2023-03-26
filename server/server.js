// Import required libraries
const express = require('express');
const mongoose = require('mongoose');

// Import routes
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');
const reservationRoutes = require('./routes/reservation');
const reviewRoutes = require('./routes/review');

// Initialize express app
const app = express();

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect to database
mongoose.connect('mongodb://localhost:27017/restaurant', { useNewUrlParser: true, useUnifiedTopology: true });

// Set up routes
app.use('/api/menu', menuRoutes);
app.use('/api/order', orderRoutes);
app.use('/api/reservation', reservationRoutes);
app.use('/api/review', reviewRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
