import { useEffect, useState } from "react"
import { useParams } from "react-router-dom";
import { doc, getDoc, collection } from "firebase/firestore";
import db from "../../firebase/firebase";
import ItemDetail from "../ItemDetail/ItemDetail";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([]);

    const {id} = useParams();

    useEffect( () => {
        const productsCollection = collection(db, 'stock');
        const referenceDoc = doc(productsCollection, id);
        getDoc(referenceDoc)
        .then( result => {
            const product = result.data();
            product.id = result.id;
            setItem(product);
        })
    }, []);


    return(
        <div className="itemDetailContainer">
            <ItemDetail item={item}/>
        </div>
    )
}   

export default ItemDetailContainer