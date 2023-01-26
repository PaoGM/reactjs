import React from "react";
import '../App.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount'

const Item = ({ data }) => {
    const {nombre, talle, img, precio} = data;

    return (
        <div className="product">
            <img src={img} className="shoe" alt="img product" />
            <h2>{nombre}</h2>
            <h3>{talle}</h3>
            <span>$ARS {precio}</span>
            <ItemCount data={data}/>
            <Link to={`/productos/${data.id}`}><button className="button-info">Mas info</button></Link>
        </div>
    )
}

export default Item;

