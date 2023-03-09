import React, { useContext } from "react";
import {  useNavigate } from "react-router-dom";
import { CartContext } from "./cont";
import "./header.css"


const Header = () => {
    const navigate = useNavigate();
    const {cartData,addCartData} = useContext(CartContext);

    return(
        <nav className="navbar">
            <h1 className="logo">E-Game Cart</h1>
            <ul className="nav-links">
                <li><a href="#">Home</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
                <li onClick={() => navigate("/cart")}><i className="fa fa-shopping-cart cart-icon"></i></li>
                <span>{cartData.length}</span>
            </ul>
        </nav>
    );
};

export default Header;
