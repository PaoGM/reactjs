import React from "react";
import { useState } from "react";


function ItemCount({ stock, initial, onAdd }) {

    const [productCounter, setProductCounter] = useState(initial);
    const [productStock, setProductStock] = useState(stock);

    const addProduct = () => {
        productStock > productCounter ? setProductCounter(productCounter + 1) : alert(`Este producto no tiene stock`);
    }

    const removeProduct = () => {
        productCounter > 1 ? setProductCounter(productCounter - 1) : alert(`Error`);
    }

    const addToBag = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else alert("Sin stock");
    }

    return (
        <div className='productStock'>
            <p>Stock: {productStock}</p>
            <div className='counterProduct'>
                <button onClick={removeProduct}>-</button>
                <p>{productCounter}</p>
                <button onClick={addProduct}>+</button>
            </div>
            <button onClick={addToBag}>Agregar a la bolsa</button>
        </div>
    )
}

export default ItemCount;