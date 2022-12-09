import React from "react";
import '../App.css';
import '../stock/stock'
import Counter from './ItemCount'

const ItemDetail = ({ data }) => {
    const {nombre, img, precio, color, talle} = data;

    return (
        <div className="productDetail">
            <img src={img} className="shoe" alt="img product" />
            <h2>{nombre}</h2>
            <h3>{color}</h3>
            <h3>{talle}</h3>
            <span>$ARS {precio}</span>
            <Counter/>
        </div>
    )
}

export default ItemDetail;