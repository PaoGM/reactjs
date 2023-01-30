import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({item}) => {

    const { nombre, precio, img, color, talle } = item;

    return (
        <div className="itemDetail">
            <div>
                <img src={img} className="shoe" alt="img product" />
            </div>

            <div className="details">
                <h2>{nombre}</h2>
                <h3>{color}</h3>
                <h3>{talle}</h3>
                <span>$ARS {precio} </span>
                <ItemCount data={item} /> 
                <Link to="/cart"><button className="botonCompra">Terminar Compra</button></Link>
            </div>

        </div>
    );
}

export default ItemDetail;