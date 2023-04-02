import React, { useState } from "react";
import { useMutation, useQuery } from '@apollo/client';
import { CREATE_MENU_ITEM, DELETE_MENU_ITEM, UPDATE_MENU_ITEM } from '../utils/mutations';
import { GET_MENU_ITEMS } from '../utils/queries';
import Auth from '../utils/auth';
import { Button } from 'react-bootstrap';


const Admin = () => {
  //vars for create
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState('');
  const [createMenuItem, { error }] = useMutation(CREATE_MENU_ITEM);
  
  //vars for delete
  const [selectedItem, setSelectedItem] = useState("");
  const {loading, data} = useQuery(GET_MENU_ITEMS);
  const [deleteMenuItem] = useMutation(DELETE_MENU_ITEM, {
      refetchQueries: [{ query: GET_MENU_ITEMS }]
  });
  
  // vars for update
  const [selectedItemId, setSelectedItemId] = useState('');
  const [updateName, setUpdateName] = useState('');
  const [updateDescription, setUpdateDescription] = useState('');
  const [updatePrice, setUpdatePrice] = useState('');
  const [updateImage, setUpdateImage] = useState('');
  const [updateMenuItem, { error: updateError }] = useMutation(UPDATE_MENU_ITEM, {
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
  
  //do if delete button
  const handleDelete = () => {
    deleteMenuItem({
        variables: { _id: selectedItem }
    });
    setSelectedItem("");
  };

  //do if update button
  const handleMenuItemChange = (event) => {
    const itemId = event.target.value;
    setSelectedItemId(itemId);
    const selectedItem = data.menuItems.find((item) => item._id === itemId);
    setUpdateName(selectedItem.name);
    setUpdateDescription(selectedItem.description);
    setUpdatePrice(selectedItem.price);
    setUpdateImage(selectedItem.image);
  };

  //do if update button
  
const handleUpdateMenuItem = async () => {
  try {
  await updateMenuItem({
  variables: {
  _id: selectedItemId,
  name: updateName,
  description: updateDescription,
  price: updatePrice,
  image: updateImage,
  },
  });
  setSelectedItemId('');
  setUpdateName('');
  setUpdateDescription('');
  setUpdatePrice('');
  setUpdateImage('');
  } catch (error) {
  console.error(error); 
  }
  };
  
  //wait on db before rendering page
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error! </p>;

  //render page
  //create div
  //delete div
  //update div
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
      <br/ >
      <div>
            <h2>Delete menu item:</h2>
            <div><select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)}>
                <option value="">Select item to delete</option>
                {data.menuItems.map((item) => (
                    <option key={item._id} value={item._id}>
                        {item.name}
                    </option>
                ))}
            </select></div>
            <button onClick={handleDelete} disabled={!selectedItem}>Delete</button>
        </div>
      <br />  
      <div>
        <h2>Update menu item:</h2>
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
