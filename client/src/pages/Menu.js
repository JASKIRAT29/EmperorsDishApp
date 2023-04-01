import React from "react";
import { useQuery } from '@apollo/client';
import { GET_MENU_ITEMS } from '../utils/queries';

const Menu = () => {
    const {loading, data} = useQuery(GET_MENU_ITEMS);

    if (loading) return <p>Loading...</p>

    const menuItems = data.menuItems;

    return (
        <div>
            <section className="feature">
                <h2>OUR DAILY MENU</h2>
                <div className="feature-grid">
                    {menuItems.map(item => (
                        <article>
                            <img src={item.image} alt={item.name} />
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <p>${item.price}</p>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Menu;
