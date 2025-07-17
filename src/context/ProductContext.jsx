import React, { createContext, useState, useEffect, useCallback } from "react";

export const ProductContext = createContext();

const MOCK_API_URL =
    "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products";

const minLoaderTime = 1000;

export const ProductProvider = ({ children }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchAllProducts = useCallback(async () => {
        setLoading(true);
        setError(null);

        const loadStartTime = Date.now();

        try {
            const response = await fetch(MOCK_API_URL);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            let data = await response.json();

            // MODIFICACIÓN/ADICIÓN: Asignar rating aleatorio entre 3 y 5
            data = data.map((product) => {
                const randomRating =
                    Math.floor(Math.random() * (5 - 3 + 1)) + 3;
                return {
                    ...product,
                    rating: product.rating || randomRating,
                };
            });
            setProducts(data);
        } catch (fetchError) {
            console.error("Error fetching products:", fetchError);
            setError(fetchError.message);
        } finally {
            const loadEndTime = Date.now();
            const loadTime = loadEndTime - loadStartTime;

            const remainingLoadTime = minLoaderTime - loadTime;

            if (remainingLoadTime > 0) {
                setTimeout(() => {
                    setLoading(false);
                }, remainingLoadTime);
            } else {
                setLoading(false);
            }
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
