import CreditCardIcon from '@mui/icons-material/CreditCard';
import { Link } from 'react-router-dom';

const Item = ({data}) => {

    const {id, nombre, img, precio } = data;

    return(
        
            <div className="product">
                <img src={img} className="shoe" alt="img product" />
                <h2>{nombre}</h2>
                <span>$ARS {precio} </span>
                <div className="opcionesPago">
                    <h3><CreditCardIcon /> Todos los medios de pago</h3>
                    <Link to={id}><button className="buttonInfo">Mas info</button></Link>
                </div>
                
                
            </div> 
        
    )
}

export default Item