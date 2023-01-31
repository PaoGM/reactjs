import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

const CartWidget = ( {products} ) => {

    const { productsQuantity } = useContext(CartContext)
    
    return (
        <>
        <ShoppingCartOutlinedIcon style={{fill: "#EE4FA4"}}/>
        {products.length != 0 && <span className="cartCounter"> {productsQuantity} </span>}
        </>
        
    )
}

export default CartWidget