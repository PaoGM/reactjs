import React, { useContext } from "react";
import "../App.css";
import CartWidget from "./CartWidget";
import Logo from "./Logo";
import { Link } from 'react-router-dom';
import { CartContext } from "../context/CartContext";

function NavBar () {

    const { totalProdenCarrito } = useContext(CartContext);

    return (
        <div className="header">
            <div className="logo">
                <Link to="/"><Logo /></Link>
            </div>
            <div className="navbar">
                <ul className="categories">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/productos">Productos</Link></li>
                    <li><Link to="/contacto">Contacto</Link></li>
                    <li><Link to="/cart"><CartWidget products={totalProdenCarrito}/></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;




