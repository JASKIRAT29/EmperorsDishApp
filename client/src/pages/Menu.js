import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import { useQuery, useMutation } from '@apollo/client';
import { GET_MENU_ITEMS } from "../utils/queries";

const Menu = () => {
    //event.preventDefault();
    const [count, setCount] = useState(0); 
    const {loading, data} = useQuery(GET_MENU_ITEMS);

    if (loading) return <p>Loading...</p>

    const menuItems = data?.menuItems || {}; 
    console.log("menu",menuItems);

    //const [addItemToCart] = useMutation(ADD_ITEM_TO_CART);
    //const handleAddToCart = async (itemId) => {
        // try {
        //   const { data } = await addItemToCart({
        //     variables: { item: itemId },
        //   });
      
        //   setCart([...cart, data.addItemToCart]);
        // } catch (error) {
        //   console.log(error);
        // }
     // };

     // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

     function increment() {
       //setCount(prevCount => prevCount+=1);
       setCount(function (prevCount) {
         return (prevCount += 1);
       });
     }
   
     function decrement() {
       setCount(function (prevCount) {
         if (prevCount > 0) {
           return (prevCount -= 1); 
         } else {
           return (prevCount = 0);
         }
       });
     }
    return (
        <div>
            {" "}
            <section className="feature">
                <h2>OUR FEATURED FOOD ITEMS</h2>
                <div className="feature-grid">
                    {menuItems.map((itm) => {
                        return(
                            <article>
                                <img src={itm.image}></img>
                                <h3>{itm.name}</h3>
                                <p>
                                    {itm.description}
                                </p>
                                <p>
                                    {itm.category}
                                </p>
                                <p className='itmPrice'>
                                    Price: {itm.price}
                                </p>
                                <div class="containerqty">
                                    <div class="quantity">
                                        <button className='quantity__minus' onClick={decrement}>-</button>
                                        <input name="quantity" type="text" class="quantity__input" value={count}></input>
                                        <button className='quantity__plus' onClick={increment}>+</button>
                                    </div>
                                </div>
                                <Button >Add to cart</Button>
                            </article>
                        )
                    })}
                    
                </div>
            </section>
        </div>
    );
};

export default Menu;
