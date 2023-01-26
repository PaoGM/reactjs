import React from "react";
import '../App.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = () => {

    const { totalProdenCarrito } = useContext(CartContext)

    return (
        <div className= "cart">
            <ShoppingCartOutlinedIcon style={{ fill: "#EE4FA4" }} />
            <span className="cartCounter"> {totalProdenCarrito} </span>
        </div>

    )
}

export default CartWidget;
