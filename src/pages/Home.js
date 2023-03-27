import React from "react";

const Home = () => {
    return (
        <main>
            <div className="bg-image">
                <div className="hero-flex">
                    <div className="hero-text">
                        <h1>Caribbean food made your way!</h1>
                        <p>
                            Caribbean restaurant that serves fresh and delicious
                            home-made food. Serving veggie options and many more
                            <a href="/menu">DISCOVER MENU</a>
                        </p>
                    </div>

                    <table>
                        <h2>Opening hours</h2>
                        <tr title="Open Monday at 9am to 6pm">
                            <td>Monday</td>
                            <td>09:00</td>
                            <td>-</td>
                            <td>18:00</td>
                        </tr>
                        <tr title="Open Tuesday at 9am to 6pm">
                            <td>Tuesday</td>
                            <td>09:00</td>
                            <td>-</td>
                            <td>18:00</td>
                        </tr>
                        <tr title="Open Wednesday at 9am to 6pm">
                            <td>Wednesday</td>
                            <td>09:00</td>
                            <td>-</td>
                            <td>18:00</td>
                        </tr>
                        <tr title="Open Thursday at 9am to 8pm">
                            <td>Thursday</td>
                            <td>09:00</td>
                            <td>-</td>
                            <td>20:00</td>
                        </tr>
                        <tr title="Open Friday at 9am to 6pm">
                            <td>Friday</td>
                            <td>09:00</td>
                            <td>-</td>
                            <td>18:00</td>
                        </tr>
                        <tr id="Saturday" title="Open Saturday at 10am to 6pm">
                            <td>Saturday</td>
                            <td>10:00</td>
                            <td>-</td>
                            <td>18:00</td>
                        </tr>
                        <tr title="Open Sunday at 11am to 4pm">
                            <td>Sunday</td>
                            <td>11:00</td>
                            <td>-</td>
                            <td>16:00</td>
                        </tr>
                    </table>
                </div>
            </div>
            <section className="feature">
                <h2>OUR FEATURED VEGAN FOOD ITEMS</h2>
                <div className="feature-grid">
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
            <section className="review">
                <h3>Don't take our word for it. Our Customers love our food</h3>
            </section>
        </main>
    );
};

export default Home;
