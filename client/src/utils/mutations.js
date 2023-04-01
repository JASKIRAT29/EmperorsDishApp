import { gql } from '@apollo/client';

export const CREATE_MENU_ITEM = gql`
  mutation CreateMenuItem($name: String!, $description: String!, $price: Float!, $image: String!) {
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
  mutation UpdateMenuItem($_id: ID!, $name: String!, $description: String!, $price: Float!, $image: String!) {
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
  mutation DeleteMenuItem($_id: ID!) {
    deleteMenuItem(_id: $_id) {
      _id
      name
      description
      price
      image
    }
  }
`;
