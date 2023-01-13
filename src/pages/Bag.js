import React from "react";
import { useContext } from "react";
import { useState } from "react";
import { BagContext } from "../context/BagContext";
import stock from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import '../App.css';
import Modal from '../components/Modal';
import Logo from '../components/Logo'

const Checkout = () => {

    const { products, removeProduct, clear, getTotalPrice } = useContext(BagContext);

    const [showModal, setShowModal] = useState(false);

    const [purchaseId, setPurchaseId] = useState("");


    const finishPurchase = () => {

        let clienteNombre = document.getElementById("nombre").value;
        let clienteEmail = document.getElementById("email").value;
        let clienteTel = document.getElementById("telefono").value;

        if (clienteNombre !== "" &&
            clienteEmail !== "") {

            const purchaseOrder = {
                comprador: {
                    name: clienteNombre,
                    email: clienteEmail,
                    phone: clienteTel
                },
                items: [...products],
                date: serverTimestamp(),
                total: getTotalPrice()
            }

            const purchaseOrders = collection(stock, "orders");
            addDoc(purchaseOrders, purchaseOrder)
                .then((result) => {
                    setPurchaseId(result.id);
                })
        }
    }


    return (

        products.length === 0 ?

            <div className="cartEmpty">
                <h2>Tu carrito esta vacio. <br />Click <Link to="/productos"><u>aqui</u></Link> para ver nuestros productos</h2>
                <img src="./" alt="cart img" />
            </div>


            :

            purchaseId !== "" ?
                <Modal title="PURCHASE COMPLETED!" >
                    <div className="purchaseComplete" close={() => setShowModal()}>
                        <div>
                            <h2>Gracias por tu compra! Tu numero de orden es {purchaseId}</h2>
                            <h3>Click <Link to="/" onClick={() => clear()}><u>aqui</u></Link> para continuar!</h3>
                        </div>
                        <Logo />
                    </div>
                </Modal>

                :

                <>
                    <div className="bag">
                        <h2>Tu Compra</h2>
                        <div>
                            {products.map(product => (
                                <div key={product.id} className="cartProductCard">
                                    <img src={`/assets/img/${product.image}`} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{product.title}</h4>
                                        <div className="purchaseDetails">
                                            <span>Precio: ${product.price} ARS</span>
                                            <span>Cantidad: {product.cantidad}</span>
                                        </div>
                                        <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${getTotalPrice()}</h3>

                        <button onClick={() => setShowModal(true)}>Pagar</button>
                    </div>

                    {showModal &&
                        <Modal title="Informacion cliente" close={() => setShowModal()}>
                            {purchaseId !== "" ? (
                                <>
                                </>
                            ) : (
                                <div className="cartForm">
                                    <label htmlFor="name">Ingresa tu Nombre*</label>
                                    <input type="text" name="name" id="name" />
                                    <label htmlFor="email">Ingresa tu Email*</label>
                                    <input type="text" name="name" id="email" />
                                    <label htmlFor="name">Ingresa tu numero de telefono</label>
                                    <input type="text" name="name" id="phone" />
                                    <button onClick={finishPurchase}>Finalizar compra</button>
                                </div>

                            )}
                        </Modal>
                    }
                </>
    )
}

export default Checkout;