import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';


const ItemDetail = ({ data }) => {

    const { nombre, precio, img, color, talle } = data;

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
                <ItemCount data={data} /> 
                <Link to="/cart"><button className="purchaseButton">FINISH PURCHASE</button></Link>
            </div>

        </div>
    );
}

export default ItemDetail;