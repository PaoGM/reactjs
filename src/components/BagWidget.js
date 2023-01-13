import React from "react";
import '../App.css'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { BagContext } from '../context/BagContext';

const BagWidget = ({ products }) => {

    const { productsQuantity } = useContext(BagContext)

    return (
        <>
            <ShoppingCartOutlinedIcon style={{ fill: "#EE4FA4" }} />
            {products.length !== 0 && <span> {productsQuantity} </span>}
        </>

    )
}

export default BagWidget;
