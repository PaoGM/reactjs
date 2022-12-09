import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../stock/stock"
import ItemDetail from "./ItemDetail"


const ItemDetailContainer = () => {

    const [item, setItem] = useState({});

    const { id } = useParams();
    
    useEffect(() => {

        const filterById = products.find((products) => products.id === parseInt(id))

        const getItem = new Promise( (resolve) => {
            setTimeout( () => {
                 resolve(filterById) 
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
            <ItemDetail data={item}/>
        </>
    )
}   

export default ItemDetailContainer;



