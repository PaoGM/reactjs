import React, { useContext, useState } from "react";
import { motion } from "framer-motion"
import CartWidget from "../CartWidget/CartWidget";
import { Link } from 'react-router-dom';
import { CartContext } from "../../context/CartContext";

function NavBar() {

    const { productsQuantity } = useContext(CartContext);

    const [rotate, setRotate] = useState(false);


    return (
        <header>
            <div className="header">
                <motion.div
                    animate={{
                        rotate: rotate ? 360 : 0
                    }}
                    transition={{ type: "tween", duration: 0.5 }}
                    onClick={() => { setRotate(!rotate) }}
                >
                    <Link to="/"><img src='/Imagenes/sorella-logo.gif' className="logo" alt="logo" /></Link>
                </motion.div>

                <div className="navbar">
                    <ul className="categories">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/productos">Productos</Link></li>
                        <li><Link to="/contacto">Contacto</Link></li>
                        <li><Link to="/cart"><CartWidget products={productsQuantity} /></Link></li>
                    </ul>
                </div>
            </div>
        </header>

    )
}

export default NavBar;