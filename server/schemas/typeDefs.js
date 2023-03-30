const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type MenuItem {
    _id: ID
    name: String
    description: String
    price: Number
    category: String
    image: String
  }

  type Order {
    _id: ID
    items: mongoose.Schema.Types.ObjectId
    total: Number
    customerName: String
    customerEmail: String
    customerPhone: String
    deliveryAddress: String
    status: String
    createdAt: Date
  }

  type Reservation {
    _id: ID
    date: Date
    time: String
    partySize: Number
    customerName: String
    customerEmail: String
    customerPhone: String
    status: String
    createdAt: Date
  }

  type Review {
    _id: ID
    restaurantID: mongoose.Schema.Types.ObjectId
    customerID: mongoose.Schema.Types.ObjectId
    rating: Number
    comment: String
    createdAt: Date

  type Query {
    //add queries
  }

  type Mutation {
    //add mutations
  }
`;

module.exports = typeDefs;
