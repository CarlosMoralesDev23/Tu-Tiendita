import React, { createContext, useState, useEffect, useCallback } from "react";

export const ProductContext = createContext();

const MOCK_API_URL =
    "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products";

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllProducts = useCallback(async () => {
        setLoading(true);
        setError(null);

        try {
            const response = await fetch(MOCK_API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            setProducts(data);
        } catch (fetchError) {
            console.error("Error fetching products:", fetchError);
            setError(fetchError.message);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    return (
        <ProductContext.Provider
            value={{
                products,
                loading,
                error,
                fetchAllProducts,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
};
