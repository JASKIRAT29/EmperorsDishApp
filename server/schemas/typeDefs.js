const { gql } = require('apollo-server-express');

// Define GraphQL type definitions
const typeDefs = gql`
  type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float
    category: String
    image: String
    reviews: [Review]
  }

  type OrderItem {
    item: MenuItem
    quantity: Int
  }

  type Order {
    _id: ID!
    customerName: String!
    customerEmail: String!
    items: [OrderItem]
    total: Float
    createdAt: String
  }

  type Review {
    _id: ID!
    menuItem: MenuItem
    rating: Int
    comment: String
    createdAt: String
  }

  input OrderItemInput {
    itemId: ID
    quantity: Int
  }

  input OrderInput {
    customerName: String!
    customerEmail: String!
    items: [OrderItemInput!]!
    total: Float!
  }
  
  type Query {
    menuItems: [MenuItem]
    order(_id: ID): Order
    orders: [Order!]
  }

  type Mutation {
    addMenuItem(name: String, description: String, price: Float, category: String, image: String): MenuItem
    updateMenuItem(_id: ID, name: String, description: String, price: Float, category: String, image: String): MenuItem
    deleteMenuItem(_id: ID): MenuItem
    createOrder(order: OrderInput!): Order
    deleteOrder(_id: ID): Order
    addReview(menuItemId: ID, rating: Int, comment: String): Review
  }

  
`;

module.exports = typeDefs;
