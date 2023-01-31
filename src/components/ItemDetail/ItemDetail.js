import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import ItemCount from '../ItemCount/ItemCount';



const ItemDetail = ({item}) => {
    
    const {nombre, precio, img, talle, color} = item;

    const { addProductToCart } = useContext(CartContext)

    const [quantitySelected, setQuantitySelected] = useState(false)

    const itemsAdded = (count) => {
        addProductToCart({...item, quantity: count});
        setQuantitySelected(true);
    }


    return (
        <div className="itemDetail">
            <div>
                <img src={img} className="shoe" alt="loading..." />
            </div>

            <div className="details">
                <h2>{nombre}</h2>
                <h2>{talle}</h2>
                <h2>{color}</h2>
                <h2>$ARS {precio}</h2>
                {
                    !quantitySelected ? <ItemCount onAdd={itemsAdded} stock={10} productData={item}/> 
                    : <><Link to="/productos"><button className="seguirCompra">Seguir Comprando</button></Link>
                        <Link to="/cart"><button className="botonCompra">Finalizar Compra</button></Link></>
                        
                }
            </div>
            
        </div>
    );



}

export default ItemDetail