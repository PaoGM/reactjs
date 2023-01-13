import React from "react";
import '../App.css';
import '../stock/stock'
import Counter from './ItemCount'
import { BagContext } from "../context/BagContext";

const ItemDetail = ({item}) => {
    
    const {title, price, image, description} = item;

    const { addProductToCart } = useContext(BagContext)

    const [quantitySelected, setQuantitySelected] = useState(false)

    const itemsAdded = (count) => {
        addProductToCart({...item, quantity: count});
        setQuantitySelected(true);
    }


    return (
        <div className="itemDetail">
            <div>
                <img src={`/Imagenes/${image}`} className="cover" alt="loading..." />
            </div>

            <div className="details">
                <h2>{title}</h2>
                <p className="description">{description}</p>
                <span>Precio: {price} $ ARS</span>
                {
                    !quantitySelected ? <Counter onAdd={itemsAdded} stock={10} productData={item}/> : <Link to="/bag"><button className="botonCompra"></button></Link>
                }
            </div>
            
        </div>
    );



}

export default ItemDetail;