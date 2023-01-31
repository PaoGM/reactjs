import { createContext, useEffect, useState } from "react";

const CartContext = createContext();

const productFromLocalStorage = JSON.parse(localStorage.getItem("products") || "[]");

const CartProvider = ({children}) => {

    const [products, setProducts] = useState(productFromLocalStorage);
    const [productsQuantity, setProductsQuantity] = useState(0);

    const getProductsQuantity = () => {
        let quantity = 0;
        products.forEach( product => {
            quantity += product.quantity
        });
        setProductsQuantity(quantity);
    }

    useEffect( () => {
        getProductsQuantity();
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addProductToCart = (product) => {
        if (isInCart(product.id)) {
            const found = products.find( prod => prod.id === product.id);
            const foundProductIndex = products.indexOf(found);
            const auxProducts = [...products];
            auxProducts[foundProductIndex].quantity += product.quantity;
            setProducts(auxProducts);
        } else {
            setProducts([...products, product]);
        }
    }

    const removeProduct = (id) => {
        setProducts(products.filter( product => product.id !== id ) );
        setProductsQuantity();
    }

    const clear = () => {
        setProducts([]);
        setProductsQuantity(0);
    }

    const isInCart = (id) => {
        return products.some( product => product.id === id );
    }

    const getTotalPrice = () => {
        let total = 0;
        products.forEach( product => {
            total += (product.precio * product.quantity);
        })
        return total;
    }

    const data = {
        products,
        addProductToCart,
        removeProduct,
        clear,
        productsQuantity,
        getTotalPrice
    }

    return(
        <CartContext.Provider value={data}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider

export { CartContext }