import React from "react";
import "../App.css"
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore"
import db from "../firebase/firebase";
import ItemList from "./ItemList"

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    const { categoryId } = useParams();
    
    useEffect( () => {
        const productsCollection = collection(db, 'stock');
        const categoryQuery = categoryId && query(productsCollection, where("category", "==", categoryId));
        
        getDocs(categoryId ? categoryQuery : productsCollection)
        .then( result => {
            const itemList = result.docs?.map( item => {
                return {
                    id: item.id,
                    ...item.data()
                }
            })
            setListProducts(itemList);
        })
    }, [categoryId]);
    
    return(
        <div className='listProducts'>
            <ItemList dataProducts={listProducts}/>
        </div>
    )
}

export default ItemListContainer;
