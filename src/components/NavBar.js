import React from "react";
import "../App.css";
import BagWidget from "./BagWidget";
import Logo from "./Logo";
import { Link } from 'react-router-dom';


const NavBar = () => {
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
                    <li><Link to="/bag"><BagWidget /></Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavBar;




