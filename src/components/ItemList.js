import React from "react";
import '../App.css';
import Item from './Item'

const ItemList = ({dataProducts}) => {
    return(
        <>
            {dataProducts.map( (product) => {    
                return <Item key={product.id} data={product}/>
            })}
        </>
    )
}

export default ItemList;