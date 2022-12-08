import React from "react";
import '../App.css';
import '../stock/stock'
import { Link } from 'react-router-dom';
import Counter from './ItemCount'

const Item = ({ data }) => {
    const {nombre, img, precio} = data;

    return (
        <div className="product">
            <img src={img} className="shoe" alt="img product" />
            <h2>{nombre}</h2>
            <span>$ARS {precio}</span>
            <Counter/>
            <Link to="/productos/:id"><button className="button-info">Mas info</button></Link>
        </div>
    )
}

export default Item;