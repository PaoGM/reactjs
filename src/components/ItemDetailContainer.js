
import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../stock/stock"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const { id } = useParams();
    
    useEffect(() => {

        const filterById = products.filter((products) => products.id === id)

        const getItem = new Promise( (resolve, reject) => {
            setTimeout( () => {
                id ? resolve(filterById) : resolve(products)
            }, 1000)    
        })


        getItem
            .then( (res) => { 
                setItem(res);
            })
            .catch( () => {
                console.log("Error");
            })
    }, [id])

    return(
        <>
            <ItemDetail item={item}/>
        </>
    )
}   

export default ItemDetailContainer;



