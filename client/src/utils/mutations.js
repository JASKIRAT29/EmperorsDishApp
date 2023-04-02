import { gql } from '@apollo/client';

export const CREATE_MENU_ITEM = gql`
  mutation createMenuItem($name: String!, $description: String!, $price: Float!, $image: String!) {
    createMenuItem(name: $name, description: $description, price: $price, image: $image) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const UPDATE_MENU_ITEM = gql`
  mutation updateMenuItem($_id: ID!, $name: String!, $description: String!, $price: Float!, $image: String!) {
    updateMenuItem(_id: $_id, name: $name, description: $description, price: $price, image: $image) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const DELETE_MENU_ITEM = gql`
  mutation deleteMenuItem($_id: ID!) {
    deleteMenuItem(_id: $_id) {
      _id
      name
      description
      price
      image
    }
  }
`;

export const CREATE_REVIEW = gql`
  mutation createReview($name: String!, $comment: String!, $rating: Int) {
    createReview(name: $name, comment: $comment, rating: $rating) {
      _id
      name
      comment
      rating
      createdAt
    }
  }`