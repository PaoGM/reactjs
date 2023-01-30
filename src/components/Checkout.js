import { useContext } from "react";
import { useState } from "react";
import { CartContext } from "../context/CartContext";
import db from "../firebase/firebase";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Link } from 'react-router-dom';
import Modal from '../components/Modal';

const Checkout = () => {

    const { stock, eliminarProducto, total } = useContext(CartContext);

    const [showModal, setShowModal] = useState(false);

    const [purchaseId, setPurchaseId] = useState("");



    const finalizarCompra = () => {

        let clienteNombre = document.getElementById("name").value;
        let clienteEmail = document.getElementById("email").value;
        let clienteTel = document.getElementById("phone").value;

        if (clienteNombre !== "" &&
            clienteEmail !== "") {

            const purchaseOrder = {
                cliente: {
                    name: clienteNombre,
                    email: clienteEmail,
                    phone: clienteTel
                },
                items: [...carrito],
                date: serverTimestamp(),
                total: total()
            }

            const purchaseOrders = collection(db, "stock");
            addDoc(purchaseOrders, purchaseOrder)
                .then((result) => {
                    setPurchaseId(result.id);
                })
        } else {
            alert("Por favor complete todos los campos!")
        }
    }


    return (

        stock.length == 0 ?

            <div className="cartEmpty">
                <h2>Tu carrito esta vacio. <br />Click <Link to="/productos"><u>aqui</u></Link> para ver nuestros productos!</h2>
            </div>


            :

            purchaseId !== "" ?
                <Modal title="PURCHASE COMPLETED!" >
                    <div className="purchaseComplete" close={() => setShowModal()}>
                        <h2>Gracias por tu compra! Tu numero de orden es: {purchaseId}</h2>
                    </div>

                </Modal>

            :

                <>
                    <div className="carrito">
                        <h2>Tu compra:</h2>
                        <div>
                            {stock.map(product => (
                                <div key={product.id} className="cartProductCard">
                                    <img src={product.img} alt="Product" />
                                    <div className="cartProductInfo">
                                        <h4>{product.nombre}</h4>
                                        <div className="purchaseDetails">
                                            <span>Precio: $ARS{product.precio}</span>
                                            <span>Cantidad: {product.cantidad}</span>
                                        </div>
                                        <button onClick={() => eliminarProducto(product.id)}>Eliminar</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h3>Total: ${total()}</h3>

                        <button onClick={() => setShowModal(true)}>Pagar</button>
                    </div>

                    {showModal &&
                        <Modal title="CUSTOMER INFORMATION" close={() => setShowModal()}>
                            {purchaseId !== "" ? (
                                <>
                                </>
                            ) : (
                                <div className="cartForm">
                                    <label htmlFor="clienteNombre">Ingresa tu nombre*</label>
                                    <input type="text" name="name" id="name" />
                                    <label htmlFor="clienteEmail">Ingresa tu Email*</label>
                                    <input type="text" name="email" id="email" />
                                    <label htmlFor="clienteTel">Ingresa tu Numero de telefono</label>
                                    <input type="text" name="telefono" id="telefono" />
                                    <button onClick={finalizarCompra}>Finalizar compra</button>
                                </div>

                            )}
                        </Modal>
                    }
                </>
    )
}

export default Checkout;