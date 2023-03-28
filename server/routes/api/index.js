// Import required libraries
const express = require('express');

// Import route handlers
const menuItemRoutes = require('./menuItem-routes');
const orderRoutes = require('./order-routes');
const reservationRoutes = require('./reservation-routes');
const reviewRoutes = require('./review-routes');

// Create router
const router = express.Router();

// Set up routes
router.use('/menuItem', menuItemRoutes);
router.use('/order', orderRoutes);
router.use('/reservation', reservationRoutes);
router.use('/review', reviewRoutes);

// Export router
module.exports = router;
