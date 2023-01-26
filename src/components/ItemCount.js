import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Remove } from '@mui/icons-material';


const ItemCount = (props) => {

    const [productCounter, setProductCounter] = useState(1);

    const [productStock, setProductStock] = useState(props.data?.stock);
    

    const addItem = (e) => {
        productCounter < productStock ? setProductCounter( productCounter + 1) :
        e.stopPropagation();
    }

    const removeItem = (e) => {
        productCounter > 1 ? setProductCounter( productCounter - 1) :
        e.stopPropagation();
    }

    const addToCart = () => {
        if (productStock > 0) {
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } 
    }

    return (
        <div className='productStock'>
                <div className='counterProduct'>
                    <button onClick={removeItem} ><Remove className="minus"/></button>
                    <p>{productCounter}</p>
                    <button onClick={addItem}><AddIcon className="plus"/></button>
                </div>
                
                <button className="button-cart" onClick={addToCart}>Agregar al carrito</button>
                
        </div>
    )
}

export default ItemCount;



