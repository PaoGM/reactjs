import React from "react";
import "./NavBar.css";
import BagWidget from "../BagWidget/BagWidget";
import Logo from "../Logo/Logo"


const NavBar = () => {
    return (
        <div className="header">
            <div className="logo">
                <Logo />
            </div>
            <div className="navbar">
                <ul className="categories">
                    <li><a href="*">Home</a></li>
                    <li><a href="*">Productos</a></li>
                    <li><a href="*">Contacto</a></li>
                </ul>
                <BagWidget />
            </div>
        </div>
    );
}

export default NavBar;




