import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const productFromLocalStorage = JSON.parse(localStorage.getItem("products") || "[]");

const CartProvider = ({ children }) => {

  const [stock, setStock] = useState(productFromLocalStorage);
  const [productsQuantity, setProductsQuantity] = useState(0);

  const getProductsQuantity = () => {
    let cantidad = 0;
    stock.forEach(product => {
      cantidad += product.cantidad
    });
    setProductsQuantity(cantidad);
  }

  useEffect(() => {
    getProductsQuantity();
    localStorage.setItem("products", JSON.stringify(stock));
  }, [stock]);

  const agregaralCarrito = (product) => {
    if (prodEnCarrito(product.id)) {
      const found = stock.find(prod => prod.id === product.id);
      const foundProductIndex = stock.indexOf(found);
      const auxProducts = [...stock];
      auxProducts[foundProductIndex].cantidad += product.cantidad;
      setStock(auxProducts);
    } else {
      setStock([...stock, product]);
    }
  }

  const eliminarProducto = (id) => {
    setStock(stock.filter(product => product.id !== id));
    setProductsQuantity();
  }

  const vaciarCarrito = () => {
    setStock([]);
    setProductsQuantity(0);
  }

  const prodEnCarrito = (id) => {
    return stock.some(product => product.id === id);
  }

  const total = () => {
    let total = 0;
    stock.forEach(product => {
      total += (product.precio * product.cantidad);
    })
    return total;
  }


  return (
    <CartContext.Provider value={(stock, agregaralCarrito, eliminarProducto, vaciarCarrito, productsQuantity, total)}>
      {children}
    </CartContext.Provider>
  )
}

export default CartProvider;

export { CartContext }

