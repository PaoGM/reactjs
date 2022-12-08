import React from "react";
import "../App.css"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from './ItemList';
import products from '../stock/stock';



const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);
    const { categoryId } = useParams();

    useEffect(() => {

        const getProducts = new Promise((resolve, reject) => {

            setTimeout(() => {
                resolve(products)
            }, 1000)

        })

        getProducts
            .then((res) => {
                setListProducts(res)
            })
            .catch(() => {
                console.log("Error")
            })
    }, [categoryId])


    return (
        <div className='listProducts'>
            <ItemList dataProducts={listProducts} />
        </div>
    )
}
export default ItemListContainer; 
