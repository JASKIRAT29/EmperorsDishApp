import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import React from "react";

const Nav = () => {
    return (
        <header>
            <img src="/images/logo.png" alt="emperor's logo"></img>
            <ul className="menu">
                <li>
                    <a href="/">HOME</a>
                </li>
                <li>
                    <a href="/menu">MENU</a>
                </li>
                <li>
                    <a href="/reviews">Reviews</a>
                </li>
                <li>
                    <a href="/order">
                        <AddShoppingCartIcon />
                    </a>
                </li>
            </ul>
        </header>
    );
};

export default Nav;
