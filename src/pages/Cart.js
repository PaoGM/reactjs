import React from "react";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import '../App.css';


function Cart() {
    const { carrito, eliminarProducto } = useContext(CartContext);
  
    return (
      <div>
        <h2>Tu carrito:</h2>
        <ul>
          {carrito.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => eliminarProducto(item)}>Eliminar</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }

export default Cart;



