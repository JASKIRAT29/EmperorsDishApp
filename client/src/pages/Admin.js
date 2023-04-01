import React, { useState } from "react";
import { useMutation } from '@apollo/client';
import { CREATE_MENU_ITEM } from '../utils/mutations';

const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState('');
  const [createMenuItem, { error }] = useMutation(CREATE_MENU_ITEM);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    alert(description);
    try {
      
        await createMenuItem({
            variables: { 
              name: name,
              description: description,
              price: price,
              image: image,
            }
          });
      setName('');
      setDescription('');
      setPrice(0);
      setImage('');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      <section className="add-menu-item">
        <h2>Add item to menu:</h2>
        <form onSubmit={handleFormSubmit}>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="description">Description:</label>
            <input
              type="text"
              id="description"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </div>
          <div>
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              id="price"
              value={price}
              onChange={(event) => setPrice(parseFloat(event.target.value))}
            />
          </div>
          <div>
            <label htmlFor="image">Image URL:</label>
            <input
              type="text"
              id="image"
              value={image}
              onChange={(event) => setImage(event.target.value)}
            />
          </div>
          <button type="submit">Add Item</button>
        </form>
        {error && <div>Error adding menu item.</div>}
      </section>
    </div>
  );
};

export default Admin;
