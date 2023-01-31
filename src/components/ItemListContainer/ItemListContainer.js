import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import ItemList from '../ItemList/ItemList';
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../../firebase/firebase";
import { MoonLoader } from 'react-spinners';

const ItemListContainer = () => {

    const [listProducts, setListProducts] = useState([]);

    const [loading, setLoading] = useState(true);
    
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
        .catch( () => console.log("Error, buscando productos...."))
        .finally( () => setLoading(false) );
    }, [categoryId]);
    
    
    return(
        <div className='listProducts'>
            {loading ? <div className="loader"><MoonLoader size={100} color="#EE4FA4" margin={1} /><h2>Cargando...</h2></div> : <ItemList dataProducts={listProducts}/>}
        </div>
    )
}

export default ItemListContainer