import React from "react";
import '../App.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';

const CartWidget = ({stock}) => {

    const { productsQuantity } = useContext(CartContext)

    return (
        <div className= "cart">
            <ShoppingCartOutlinedIcon style={{ fill: "#EE4FA4" }} /> 
            {stock.length != 0 && <p className="cartCounter">{productsQuantity}</p>}
        </div>

    )
}

export default CartWidget;
