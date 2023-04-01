import React,  { useState, useEffect } from "react";
import axios from 'axios';

const Menu = () => {
    const [menuItems, setMenuItems] = useState([]);

    useEffect(() => {
        axios.get('/api/menu')
        .then(response => {
            setMenuItems(response.data);
        })
        .catch(error => {
            console.log(error);
        });
    }, []);

    return (
        <div>
            {" "}
            <section className="feature">
                <h2>OUR FEATURED VEGAN FOOD ITEMS</h2>
                <div className="feature-grid">
                    <article>
                        <ul>
                            {menuItems.map(item => (
                            <li key={item._id}>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                                <p>${item.price}</p>
                                <img src={item.image} alt={item.name} />
                            </li>
                            ))}
                        </ul>
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
                </div>
            </section>
        </div>
    );
};

export default Menu;
