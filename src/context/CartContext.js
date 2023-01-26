import React from 'react';
import { useContext, useState } from 'react'

const CartContext = React.createContext([]);

export const useCartContext = () => useContext(CartContext);

const CartProvider = ({ children }) => {

  const [carrito, setCarrito] = useState([]);

  const agregaralCarrito = (item, cantidad) => {
    if (prodEnCarrito(item.id)) {
      setCarrito(carrito.map(product => {
        return product.id === item.id ? { ...product, cantidad: product.cantidad + cantidad } : product
      }));
    } else {
      setCarrito([...carrito, { ...item, cantidad }]);
    }
  }

  const prodEnCarrito = (id) => carrito.find(product => product.id === id) ? true : false;

  const eliminarProducto = (id) => setCarrito(carrito.filter(product => product.id !== id));
  const total = () => {
    return carrito.reduce((prev, act) => prev + act.cantidad * act.precio, 0);
  }
  const vaciarCarrito = () => setCarrito([]);

  const totalProdenCarrito = () => carrito.reduce((acumulador, productoActual) => acumulador + productoActual.cantidad, 0);

  return (
    <CartContext.Provider value={{ total, vaciarCarrito, eliminarProducto, totalProdenCarrito, agregaralCarrito, carrito }}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export { CartContext }