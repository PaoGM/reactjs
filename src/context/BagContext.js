import { createContext, useEffect, useState } from "react";

const BagContext = createContext();

const productFromLocalStorage = JSON.parse(localStorage.getItem("products") || "[]");

const BagProvider = ({children}) => {

    const [products, setProducts] = useState (productFromLocalStorage);
    const [productsQuantity, setProductsQuantity] = useState(0);

    useEffect ( () => {
        getProductsQuantity();
        localStorage.setItem("products", JSON.stringify(products));

    }, [products]);
    
    
    
    const getProductsQuantity = () => {
        let cantidad = 0;
        products.forEach( producto => {
            cantidad += producto.cantidad
        });
        setProductsQuantity(cantidad);

    }

    const addProductToCart = (producto) => {
        if (isInCart(producto.id)) {
            const found = products.find( prod => prod.id === producto.id);
            const foundProductIndex = products.indexOf(found);
            const auxProducts = [...products];
            auxProducts[foundProductIndex].cantidad += producto.cantidad;
            setProducts(auxProducts);
        } else {
            setProducts([...products, producto]);
        }
    }

    const removeProduct = (id) => {
        setProducts(products.filter( producto => producto.id !== id ) );
        setProductsQuantity();
    }

    const clear = () => {
        setProducts([]);
        setProductsQuantity(0);
    }

    const isInCart = (id) => {
        return products.some( producto => producto.id === id );
    }

    const getTotalPrice = () => {
        let total = 0;
        products.forEach( producto => {
            total += (producto.precio * producto.cantidad);
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
        <BagContext.Provider value={data}>
            {children}
        </BagContext.Provider>
    )
}

export default BagProvider

export { BagContext }