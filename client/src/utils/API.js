// Define the API endpoint URL
const apiUrl = 'https://example.com/api/menu-items';

// Fetch the menu items from the server
fetch(apiUrl)
  .then(response => response.json())
  .then(menuItems => {
    // Process the menu items here
    console.log(menuItems);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });


  // Define the order data
export const orderData = {
  customerName: 'Jaskirat',
  items: [
    { name: 'Lasagna', price: 9.99 },
    { name: 'Protein balls', price: 3.99 },
    { name: 'Salads', price: 1.99 },
  ],
  total: 15.97,
  date: new Date().toISOString(),
};

// Send the order data to the server
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(orderData),
})
  .then(response => response.json())
  .then(order => {
    // Process the order confirmation here
    console.log(order);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
  // Define the reservation data
const reservationData = {
  customerName: 'Jeena Kozhimukkath',
  date: '2023-04-01',
  time: '18:30',
  partySize: 4,
};

// Send the reservation data to the server
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reservationData),
})
  .then(response => response.json())
  .then(reservation => {
    // Process the reservation confirmation here
    console.log(reservation);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });
// Define the review data
const reviewData = {
  customerName: 'Dexter Dick',
  rating: 4,
  comment: 'Great food and service!',
  date: new Date().toISOString(),
};

// Send the review data to the server
fetch(apiUrl, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reviewData),
})
  .then(response => response.json())
  .then(review => {
    // Process the review confirmation here
    console.log(review);
  })
  .catch(error => {
    // Handle errors here
    console.error(error);
  });

