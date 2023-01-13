import React from "react";
import { useState } from "react";
import AddIcon from '@mui/icons-material/Add';
import { Remove } from '@mui/icons-material';


function ItemCount({ stock, onAdd,  productData }){

    const [productCounter, setProductCounter] = useState(1);

    const [productStock, setProductStock] = useState(stock);

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
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } 
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <Remove className="minus" onClick={removeItem} />
                    <p>{productCounter}</p>
                    <AddIcon className="plus" onClick={addItem} />
                </div>
                
                <button className="button-cart" onClick={addToCart}>Agregar al carrito</button>
                
        </div>
    )
}

export default ItemCount;