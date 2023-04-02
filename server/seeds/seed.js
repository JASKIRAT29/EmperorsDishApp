const db = require('../config/connection');
const { MenuItem, Review } = require('../models');

const menuData = require('./menuData.json');
const reviewData = require('./reviewData.json');


db.once('open', async () => {
  await MenuItem.deleteMany({});
  await Review.deleteMany({});

  const menuSeed = await MenuItem.insertMany(menuData);
  console.log('Menu seeded sucessfully!');

  const reviewSeed = await Review.insertMany(reviewData);
  console.log('Review seeded sucessfully!');
  
  process.exit(0);
});
