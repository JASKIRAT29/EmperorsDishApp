import { gql } from '@apollo/client';
// for menu-items
export const GET_MENU_ITEMS = gql`
  query GetMenuItems {
    menuItems {
      id
      name
      description
      price
      image
    }
  }
`;

export const GET_MENU_ITEM_BY_ID = gql`
  query GetMenuItemById($menuItemId: ID!) {
    menuItem(id: $menuItemId) {
      id
      name
      description
      price
      image
    }
  }
`;
//for orders
export const GET_ORDERS = gql`
  query GetOrders {
    orders {
      id
      customer {
        id
        name
      }
      items {
        id
        name
        price
        quantity
      }
      total
      createdAt
    }
  }
`;

export const GET_ORDER_BY_ID = gql`
  query GetOrderById($orderId: ID!) {
    order(id: $orderId) {
      id
      customer {
        id
        name
      }
      items {
        id
        name
        price
        quantity
      }
      total
      createdAt
    }
  }
`;
//for reservation
export const GET_ALL_RESERVATIONS = gql`
  query {
    reservations {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const ADD_RESERVATION = gql`
  mutation($name: String!, $hotelName: String!, $arrivalDate: String!, $departureDate: String!) {
    addReservation(name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const UPDATE_RESERVATION = gql`
  mutation($id: ID!, $name: String, $hotelName: String, $arrivalDate: String, $departureDate: String) {
    updateReservation(id: $id, name: $name, hotelName: $hotelName, arrivalDate: $arrivalDate, departureDate: $departureDate) {
      id
      name
      hotelName
      arrivalDate
      departureDate
    }
  }
`;

export const DELETE_RESERVATION = gql`
  mutation($id: ID!) {
    deleteReservation(id: $id) {
      id
    }
  }
`;
//for review
export const GET_REVIEWS = gql`
  query GetReviews($productId: ID!) {
    reviews(productId: $productId) {
      id
      rating
      comment
      author {
        id
        name
      }
      createdAt
    }
  }
`;

export const ADD_REVIEW = gql`
  mutation AddReview($productId: ID!, $rating: Int!, $comment: String!) {
    addReview(productId: $productId, rating: $rating, comment: $comment) {
      id
      rating
      comment
      author {
        id
        name
      }
      createdAt
    }
  }
`;
