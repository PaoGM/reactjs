import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { Remove } from '@mui/icons-material';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemCount({ stock, onAdd }){

    const [productCounter, setProductCounter] = useState(1);

    const [productStock, setProductStock] = useState(stock);

    const errorMessage = (message) => toast.error(message);

    const addItem = (e) => {
        productCounter < productStock ? setProductCounter( productCounter + 1) : errorMessage(`No hay stock!`);
        e.stopPropagation();
    }

    const removeItem = (e) => {
        productCounter > 1 ? setProductCounter( productCounter - 1) : errorMessage(`Error`);
        e.stopPropagation();
    }

    const addToCart = () => {
        if (productStock > 0) {
            onAdd(productCounter);
            setProductStock(productStock - productCounter);
            setProductCounter(1);
        } else errorMessage("No hay stock");
    }

    return (
        <div className='productStock'>
                <p>Stock: {productStock}</p>
                <div className='counterProduct'>
                    <Remove className="minus" onClick={removeItem} />
                    <p>{productCounter}</p>
                    <AddIcon className="plus" onClick={addItem} />
                </div>
                
                <button className="buttonCart" onClick={addToCart}>Agregar al carrito</button>
                
        </div>
    )
}

export default ItemCount