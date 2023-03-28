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
                <h2>OUR FEATURED FOOD ITEMS</h2>
                <div className="feature-grid">
                    <article>
                        <a href="/menu">
                            <img src="/images/1.png" alt="lasagna"></img>
                        </a>
                        <h3>Lasagna</h3>
                        <p>
                            This vegetarian lasagna is cheesy (of course), and
                            loaded with vegetables, spinach and a simple tomato
                            sauce.
                        </p>
                    </article>
                    <article>
                        <a href="/menu">
                            <img src="/images/3.png" alt="caesar salad"></img>
                        </a>
                        <h3>Caesar salad</h3>
                        <p>
                            The crowd-pleasing salad of crisp romaine leaves,
                            crunchy croutons, and a little or a lot of anchovy,
                            as you like.
                        </p>
                    </article>
                    <article>
                        <a href="/menu">
                            <img src="/images/4.png" alt="protein balls"></img>
                        </a>
                        <h3>Protein Balls</h3>
                        <p>Energy up!!!</p>
                    </article>
                    <article>
                        <a href="/menu">
                            <img src="/images/5.png" alt="Protein Balls"></img>
                        </a>
                        <h3>Fish and Rice</h3>
                        <p>Fresh catch means great taste</p>
                    </article>
                    <article>
                        <a href="/menu">
                            <img
                                src="/images/img-20230327-WA0040.jpg"
                                alt="Fish and Rice"
                            ></img>
                        </a>
                        <h3>Pizzia</h3>
                        <p>Our pizzas made with fresh ingredients</p>
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
