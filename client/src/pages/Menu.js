import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
//import { useQuery, useMutation } from '@apollo/client';


const Menu = () => {
    //event.preventDefault();
    const [cart, setCart] = useState([]);
    //const {loading, data} = useQuery(GET_ME);
    //let menuItems = data?.me || {}; 
    let menuItems =[
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/1.png',price:'20.99' },
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/6.png',price:'21.99' },
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/3.png',price:'23.99' },
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/4.png',price:'24.99' },
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/5.png',price:'25.99' },
];
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

     const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

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
                <h2>OUR FEATURED VEGAN FOOD ITEMS</h2>
                <div className="feature-grid">
                    {menuItems.map((itm) => {
                        return(
                            <article>
                                <img src={itm.src}></img>
                                <h3>{itm.title}</h3>
                                <p>
                                    {itm.desc}
                                </p>
                                <p className='itmPrice'>
                                    Price: {itm.price}
                                </p>
                                <div class="containerqty">
                                    <div class="quantity">
                                        <a href="#" class="quantity__minus" onClick={increment}><span>-</span></a>
                                        <input name="quantity" type="text" class="quantity__input" value="1"></input>
                                        <a href="#" class="quantity__plus" onClick={decrement}><span>+</span></a>
                                    </div>
                                </div>
                                <Button >Add to cart</Button>
                            </article>
                        )
                    })}
                    {/* <article>
                        <img src="/images/1.png"></img>
                        <h3>food item</h3>
                        
                        <p>
                            Planet Special Naan With Basil Pesto Sauce Topped
                            With Broccoli, Spinach, Feta Cheese, Black Olives &
                            Red Peppers And Garnished With Vegan Mayonnaise.
                        </p>
                        <Button >Add to cart</Button>
                    </article>
                    <article>
                        <img src="/images/1.png"></img>
                        <h3>food item</h3>
                        <p>
                            Planet Special Naan With Basil Pesto Sauce Topped
                            With Broccoli, Spinach, Feta Cheese, Black Olives &
                            Red Peppers And Garnished With Vegan Mayonnaise.
                        </p>
                    </article>
                    <article>
                        <img src="/images/1.png"></img>
                        <h3>food item</h3>
                        <p>
                            Planet Special Naan With Basil Pesto Sauce Topped
                            With Broccoli, Spinach, Feta Cheese, Black Olives &
                            Red Peppers And Garnished With Vegan Mayonnaise.
                        </p>
                    </article>
                    <article>
                        <img src="/images/1.png"></img>
                        <h3>food item</h3>
                        <p>
                            Planet Special Naan With Basil Pesto Sauce Topped
                            With Broccoli, Spinach, Feta Cheese, Black Olives &
                            Red Peppers And Garnished With Vegan Mayonnaise.
                        </p>
                    </article>
                    <article>
                        <img src="/images/1.png"></img>
                        <h3>food item</h3>
                        <p>
                            Planet Special Naan With Basil Pesto Sauce Topped
                            With Broccoli, Spinach, Feta Cheese, Black Olives &
                            Red Peppers And Garnished With Vegan Mayonnaise.
                        </p>
                    </article> */}
                </div>
            </section>
        </div>
    );
};

export default Menu;
