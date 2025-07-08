import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        const storedCart = localStorage.getItem("cart");
        try {
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (e) {
            console.error("Error al parsear el carrito de localStorage:", e);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);



    const { products, loadingProducts, productError} = useContext(ProductContext);

    // Guardamos en el localStorage el carrito cada vez que cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const handleOpenCart = () => setIsCartOpen(true);
    const handleCloseCart = () => setIsCartOpen(false);

    const addToCart = (productToAdd) => {
        if (loadingProducts || productError) {
            console.log("Productos no cargados aún o hay un error.");
            alert(
                "No se pueden agregar productos al carrito. Por favor, inténtalo de nuevo más tarde."
            );
            return;
        }

        const isProductInCart = cart.find(
            (item) => item.id === productToAdd.id
        );

        if (isProductInCart) {
            const productData = products.find((p) => p.id === productToAdd.id);
            if (productData && isProductInCart.quantity < productData.stock) {
                setCart(
                    cart.map((item) =>
                        item.id === productToAdd.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                console.log(
                    `Ya no hay más ${productToAdd.name} disponibles (stock: ${
                        productData ? productData.stock : "N/A"
                    })`
                );
                alert(`Ya no hay más ${productToAdd.name} disponibles`);
            }
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
        }
    };


    const emptyCart = () => {
        setCart([]);
    };

    const incrementQuantity = (productToIncrement) => {
        const itemInCart = cart.find(
            (item) => item.id === productToIncrement.id
        );

        if (itemInCart) {
            const productData = products.find(
                (p) => p.id === productToIncrement.id
            );
            if (productData && itemInCart.quantity < productData.stock) {
                setCart(
                    cart.map((item) =>
                        item.id === productToIncrement.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                console.log(
                    `Stock máximo alcanzado para ${itemInCart.name} (stock: ${
                        productData ? productData.stock : "N/A"
                    })`
                );
                alert(`No hay más stock disponible para ${itemInCart.name}.`);
            }
        }
    };

    const decrementQuantity = (productToDecrement) => {
        const itemInCart = cart.find(
            (item) => item.id === productToDecrement.id
        );

        if (itemInCart) {
            if (itemInCart.quantity === 1) {
                removeItemFromCart(productToDecrement);
            } else {
                setCart(
                    cart.map((item) =>
                        item.id === productToDecrement.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                );
            }
        }
    };

    const removeItemFromCart = (productToRemove) => {
        setCart(cart.filter((item) => item.id !== productToRemove.id));
    };

    const total = cart.reduce((suma, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return suma + price * quantity;
    }, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                products, 
                loader: loadingProducts, // Mapeamos 'loadingProducts' a 'loader'
                error: productError, // Mapeamos 'productError' a 'error'
                addToCart,
                removeItemFromCart,
                handleOpenCart,
                handleCloseCart,
                isCartOpen,
                emptyCart,
                incrementQuantity,
                decrementQuantity,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
