import { gql } from '@apollo/client';

// Menu Itenm
export const CREATE_MENU_ITEM = gql`
  mutation CreateMenuItem($input: CreateMenuItemInput!) {
    createMenuItem(input: $input) {
      id
      name
      description
      price
    }
  }
`;

export const UPDATE_MENU_ITEM = gql`
  mutation UpdateMenuItem($id: ID!, $input: UpdateMenuItemInput!) {
    updateMenuItem(id: $id, input: $input) {
      id
      name
      description
      price
    }
  }
`;

export const DELETE_MENU_ITEM = gql`
  mutation DeleteMenuItem($id: ID!) {
    deleteMenuItem(id: $id)
  }
`;
     //Order
export const CREATE_ORDER = gql`
  mutation CreateOrder($input: CreateOrderInput!) {
    createOrder(input: $input) {
      id
      status
      items {
        menuItem {
          id
          name
        }
        quantity
      }
      totalPrice
    }
  }
`;
export const UPDATE_ORDER = gql`
  mutation UpdateOrder($input: UpdateOrderInput!) {
    updateOrder(input: $input) {
      id
      status
      items {
        menuItem {
          id
          name
        }
        quantity
      }
      totalPrice
    }
  }
`;
export const CANCEL_ORDER = gql`
  mutation CancelOrder($orderId: ID!) {
    cancelOrder(orderId: $orderId) {
      id
      status
    }
  }
`;
    //Reservation
export const CREATE_RESERVATION = gql`
  mutation CreateReservation($name: String!, $email: String!, $date: String!, $time: String!, $partySize: Int!) {
    createReservation(name: $name, email: $email, date: $date, time: $time, partySize: $partySize) {
      id
      name
      email
      date
      time
      partySize
    }
  }
`;
export const CANCEL_RESERVATION = gql`
  mutation CancelReservation($id: ID!) {
    cancelReservation(id: $id) {
      id
    }
  }
`;
export const UPDATE_RESERVATION = gql`
  mutation UpdateReservation($id: ID!, $name: String, $email: String, $date: String, $time: String, $partySize: Int) {
    updateReservation(id: $id, name: $name, email: $email, date: $date, time: $time, partySize: $partySize) {
      id
      name
      email
      date
      time
      partySize
    }
  }
`;
    //Review
export const CREATE_REVIEW = gql`
  mutation CreateReview($restaurantId: ID!, $name: String!, $rating: Int!, $comment: String) {
    createReview(restaurantId: $restaurantId, name: $name, rating: $rating, comment: $comment) {
      id
      restaurantId
      name
      rating
      comment
    }
  }
`;
export const UPDATE_REVIEW = gql`
  mutation UpdateReview($id: ID!, $name: String, $rating: Int, $comment: String) {
    updateReview(id: $id, name: $name, rating: $rating, comment: $comment) {
      id
      restaurantId
      name
      rating
      comment
    }
  }
`;
export const DELETE_REVIEW = gql`
  mutation DeleteReview($id: ID!) {
    deleteReview(id: $id) {
      id
    }
  }
`;