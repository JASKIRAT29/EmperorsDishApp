const { MenuItem, Order, Review } = require('../models');

const resolvers = {
    //define resolvers for queries
    Query: {
      //get all menu items  
      menuItems: async () => {
        return await MenuItem.find();
      },
      //get menu item by id
      menuItem: async (_, { id }) => {
        return await MenuItem.findById(id);
      },
      //get all reviews
      reviews: async () => {
        return await Review.find();
      },
      //get review by id
      // review: async (_, { id }) => {
      //   return await Review.findById(id);
      // },
    },
    //define resolvers for mutations
    Mutation: {
      //create menu item  
      createMenuItem: async (_, { input }) => {
        const menuItem = await MenuItem.create(input);
        return menuItem;
      },
      //update menu item
      updateMenuItem: async (_, { id, input }) => {
        const menuItem = await MenuItem.findById(id);
        menuItem.set(input);
        await menuItem.save();
        return menuItem;
      },
      //delete menu item by id
      deleteMenuItem: async (_, { id }) => {
        const menuItem = await MenuItem.findByIdAndDelete(id);
        return menuItem;
      },
      //create review
      createReview: async (_, { input }) => {
        const review = await Review.create(input);
        return review;
      },
      //delete review by id
      deleteReview: async (_, { id }) => {
        const review = await Review.findByIdAndDelete(id);
        return review;
      },
      // create order
      createOrder: async (_, { customerName, customerEmail, items, total }) => {
        const order = await Order.create({ customerName, customerEmail, items, total });
        return order;
      },
      // delete order by id
      deleteOrder: async (_, { _id }) => {
        const order = await Order.findByIdAndDelete(_id);
        return order;
      },
    },
    //resolvers for menu item
    MenuItem: {
      //get all reviews for menu item  
      reviews: async (menuItem) => {
        return await Review.find({ menuItemId: menuItem.id });
      },
    },
    //resolvers for review
    Review: {
      //get menu item for a review  
      menuItem: async (review) => {
        return await MenuItem.findById(review.menuItemId);
      },
    },
    // reviews: async () => {
    //   return await Review.find();
    // },

  };
  

module.exports = resolvers;
