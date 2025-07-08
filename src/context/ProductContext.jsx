// src/context/ProductContext.js
import React, { createContext, useState, useEffect } from "react";

export const ProductContext = createContext();

const MOCKAPI_PRODUCTS_URL =
    "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loadingProducts, setLoadingProducts] = useState(true);
    const [productError, setProductError] = useState(null);


    const fetchAllProducts = async () => {
        setLoadingProducts(true); 
        setProductError(null); 

        try {
            const response = await fetch(MOCKAPI_PRODUCTS_URL);

            if (!response.ok) {
                throw new Error(
                    `Error HTTP: ${response.status} ${response.statusText}`
                );
            }

            const data = await response.json();
            setProducts(data);
        } catch (err) {
            setProductError(err.message);
        } finally {
            setTimeout(() => {
                setLoadingProducts(false);
            }, 1000);
        }
    };

    useEffect(() => {
        fetchAllProducts();
    }, []); 


    const theBalls = products.filter((product) => product.type === "ball");
    const theTShirts = products.filter((product) => product.type === "tshirt");
    const theShoes = products.filter((product) => product.type === "shoes");

    return (
        <ProductContext.Provider
            value={{
                products,
                loadingProducts,
                productError,
                theBalls,
                theTShirts,
                theShoes,
                fetchAllProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
