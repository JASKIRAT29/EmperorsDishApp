import { gql } from "@apollo/client";

export const GET_MENU_ITEMS = gql`
  query {
    menuItems {
      _id
      name
      description
      price
      image
    }
  }
`;