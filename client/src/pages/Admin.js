import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MENU_ITEM, DELETE_MENU_ITEM, UPDATE_MENU_ITEM } from '../utils/mutations';
import { GET_MENU_ITEMS } from '../utils/queries';
import Auth from '../utils/auth';
import { Button } from 'react-bootstrap';


const Admin = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0.0);
  const [image, setImage] = useState('');
  const [createMenuItem, { error }] = useMutation(CREATE_MENU_ITEM);

  const [selectedItem, setSelectedItem] = useState("");
  const {loading, data} = useQuery(GET_MENU_ITEMS);
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM, {
      refetchQueries: [{ query: GET_MENU_ITEMS }]
  });

  const [selectedItemId, setSelectedItemId] = useState('');
  const [updateMenuItem] = useMutation(UPDATE_MENU_ITEM, {
    refetchQueries: [{ query: GET_MENU_ITEMS }],
  });  

  const token = Auth.loggedIn() ? Auth.getToken() : null;

  if (!token) {
    window.location.assign('/Login');
    return false;
  }
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
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

  const handleDelete = () => {
    deleteMenuItem({
        variables: { name: selectedItem }
    });
    setSelectedItem("");
  };

  const handleMenuItemChange = (event) => {
    const itemId = event.target.value;
    setSelectedItemId(itemId);
  };
  
  const handleUpdateMenuItem = async () => {
    try {
      await updateMenuItem({
        variables: {
          _id: selectedItemId,
          name,
          description,
          price,
          image,
        },
      });
      setSelectedItemId('');
      setName('');
      setDescription('');
      setPrice('');
      setImage('');
    } catch (error) {
      console.error(error);
    }
  };
  

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;

  return (
    <div>
      <section className="add-menu-item">
        <h2>Add item to menu:</h2>
        <Button  className="button-container"
          type='submit'
          variant='success'
          onClick={Auth.logout}>
          Logout
        </Button>
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
      <div>
            <h2>Delete menu item:</h2>
            <div><select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="">Select item to delete</option>
                {data.menuItems.map((item) => (
                    <option key={item.id} value={item.name}>
                        {item.name}
                    </option>
                ))}
            </select></div>
            <button onClick={handleDelete} disabled={!selectedItem}>Delete</button>
        </div>
      <div>
        <h2>Update Menu Item</h2>
        <label>
          Select a menu item to update:
          <select value={selectedItemId} onChange={handleMenuItemChange}>
            <option value="">--Select--</option>
            {data.menuItems.map((menuItem) => (
              <option key={menuItem._id} value={menuItem._id}>
                {menuItem.name}
              </option>
            ))}
          </select>
        </label>
        <br />
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          Description:
          <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br />
        <label>
          Price:
          <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </label>
        <br />
        <label>
          Image URL:
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br />
        <button onClick={handleUpdateMenuItem}>Update</button>
      </div>
    </div>
  );
};

export default Admin;
