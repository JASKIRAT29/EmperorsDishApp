import { gql } from "@apollo/client";

export const GET_MENU_ITEMS = gql`
  query menuItems {
    menuItems {
      _id
      name
      description
      price
      image
    }
  }
`;

export const GET_REVIEWS = gql`
  query reviews {
    reviews {
      _id
      name
      comment
      createdAt
    }
  }
`;
