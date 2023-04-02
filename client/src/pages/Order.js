import React from "react";
import Button from "@mui/material/Button";

const Order = ({ cart }) => {
    return (
        <div>
            <h3 className="cart-title">Shopping Cart {console.log(cart)}</h3>
            <article className="cart">
                <div className="row">
                    <div class="cart_img">
                        <img src="images/1.png" alt=""></img>
                        <p>Fish and rice </p>
                    </div>
                    <div>
                        <Button variant="outlined" size="small">
                            +
                        </Button>
                        <Button
                            variant="outlined"
                            sx={{ margin: 1 }}
                            size="small"
                        >
                            1
                        </Button>
                        <Button variant="outlined" size="small">
                            -
                        </Button>
                    </div>
                    <div>
                        <span className="price-span">$89</span>
                        <Button className="remove" variant="contained">
                            Remove
                        </Button>
                    </div>
                </div>

                <hr></hr>
                <div class="total">
                    <span>Total Price of your Cart: </span>
                    <span>$89</span>
                </div>
            </article>
        </div>
    );
};

export default Order;
