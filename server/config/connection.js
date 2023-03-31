// Import required libraries
const mongoose = require('mongoose');

// Define database connection string
const connectionString = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/restaurant';
// Connect to the database
mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to the database');
}).catch((error) => {
  console.error('Error connecting to the database:', error);
});
