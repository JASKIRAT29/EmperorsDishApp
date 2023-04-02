import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';


const Menu = () => {
    //event.preventDefault();
   
    //let menuItems = data?.me || {}; 
    let menuItems =[
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/1.png',price:'20.99',category:'dessert' },
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/6.png',price:'21.99' ,category:'dessert'},
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/3.png',price:'23.99',category:'dessert'},
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/4.png',price:'24.99' ,category:'dessert'},
    { title: 'title',desc:'Planet Special Naan With Basil Pesto Sauce Topped With Broccoli, Spinach, Feta Cheese, Black Olives & Red Peppers And Garnished With Vegan Mayonnaise.',src:'/images/5.png',price:'25.99' ,category:'dessert'},
];
    
     
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
                                <Button >Edit</Button>
                            </article>
                        )
                    })}
                    
                </div>
            </section>
        </div>
    );
};

export default Menu;
