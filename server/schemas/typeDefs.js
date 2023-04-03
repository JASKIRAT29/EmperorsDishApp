const { gql } = require( 'apollo-server-express');

// Define GraphQL type definitions
const typeDefs = gql`
  type MenuItem {
    _id: ID!
    name: String!
    description: String
    price: Float
    image: String
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
    status: String
    createdAt: String
  }

  type Review {
    _id: ID!
    name: String!
    comment: String!
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
}

type User {
  _id: ID!
  username: String
  email: String
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
    menuItem(_id: ID!): MenuItem
    order(_id: ID): Order
    orders: [Order!]
    reviews: [Review]
  }

  type Mutation {
    createMenuItem(name: String, description: String, price: Float, image: String): MenuItem
    updateMenuItem(_id: ID, name: String, description: String, price: Float, image: String): MenuItem
    deleteMenuItem(_id: ID!): MenuItem
    createOrder(order: OrderInput!): Order
    deleteOrder(_id: ID): Order
    createReview(name:String!, comment: String!): Review
    deleteReview(_id: ID): Review
    login(email: String!, password: String!): Auth
  }

  
`;

module.exports = typeDefs;
