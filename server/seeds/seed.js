const db = require('../config/connection');
const { MenuItem } = require('../models');

const menuData = require('./menuData.json');

db.once('open', async () => {
  await MenuItem.deleteMany({});

  const menuSeed = await MenuItem.insertMany(menuData);

  console.log('Menu seeded sucessfully!');
  process.exit(0);
});
