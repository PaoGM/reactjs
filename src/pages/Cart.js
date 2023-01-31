import { useState , useContext } from "react";
import { CartContext } from "../context/CartContext";
import db from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Modal from '../components/Modal/Modal';

const Checkout = () => {

    const { products, productsQuantity, removeProduct, clear, getTotalPrice } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

    const [purchaseId, setPurchaseId] = useState("");

    const errorNotification = (message) => toast.error(message);


    const finishPurchase = () => {

        let customerName = document.getElementById("name").value;
        let customerMail = document.getElementById("email").value;
        let customerPhone = document.getElementById("phone").value;

        if (customerName !== "" &&
            customerMail !== "" ) {

                const purchaseOrder = {
                    buyer: {
                        name: customerName,
                        email: customerMail,
                        phone: customerPhone
                    },
                    items: [...products],
                    date: serverTimestamp(),
                    total: getTotalPrice()
                }
        
                const purchaseOrders = collection(db, "orders");
                addDoc(purchaseOrders, purchaseOrder)
                    .then((result) => {
                        setPurchaseId(result.id);
                    })
            } else {
                errorNotification("Por favor complete todos los campos");
            }
    }


    return(

        products.length === 0 ?

        <div className="cartEmpty">
            <h2>Tu carrito esta vacio. <br/>Click <Link to="/productos"><u>aqui</u></Link> para ver nuestros productos!</h2>
        </div>
        

        :

        purchaseId !== "" ?
            <Modal title="Compra completa!" >
                <div className="purchaseComplete" close={() => setShowModal()}>
                    <div>
                        <h2>Gracias por tu Compra! Tu id de orden es: {purchaseId}</h2>
                        <h3>Click <Link to="/" onClick={() => clear()}><u>aqui</u></Link> para continuar!</h3>
                    </div>

                    <img src="/Imagenes/sorella-logo.gif" alt="logo" />
                    
                </div>
            </Modal>
        
        :

        <>
           <div className="cart">
                        <h2>Tu compra</h2>
                        <div>
                            {products.map(product  => (
                                <div key={product.id} className="cartProductCard">
                                    <img src={product.img} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{product.nombre}</h4>
                                        <div className="purchaseDetails">
                                            <span>Precio unitario: ${product.precio} ARS</span>
                                            <span>Cantidad: {product.quantity}</span>
                                        </div>
                                        <button onClick={() => removeProduct(product.id)}>Eliminar producto</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${getTotalPrice()}</h3>
                        <button onClick={() => clear()}>Vaciar carrito</button>
                        <button onClick={() => setShowModal(true)}>Pagar</button>
            </div>

            {showModal && 
                    <Modal title="Informacion del cliente" close={() => setShowModal()}>
                        {purchaseId !== "" ? (
                            <>
                            </>
                        ) : (
                        <div className="cartForm">
                            <label htmlFor="name">Ingresa tu Nombre*</label>
                            <input type="text" name="name" id="name"/>
                            <label htmlFor="email">Ingresa tu Email*</label>
                            <input type="text" name="name" id="email" />
                            <label htmlFor="name">Ingresa tu numero de telefono</label>
                            <input type="text" name="name" id="phone" />
                            <button onClick={finishPurchase}>Complete purchase</button>
                        </div>

                        )}
                    </Modal>
                }
        </>
    )
}

export default Checkout