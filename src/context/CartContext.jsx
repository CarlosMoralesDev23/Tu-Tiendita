import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(true);


    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const loginUser = () => setIsAuthenticated(true);
    const logoutUser = () => setIsAuthenticated(false);

    useEffect(() => {
        fetch("/data/products.json")
            .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => {
                    setProducts(data);
                    setLoader(false);
                }, 1250);
            })
            .catch((error_) => {
                console.log("Error: ", error_);
                setLoader(false);
                setError(true);
            });
    }, []);

    //* FUNCIONES Carrito
    const handleOpenCart = () => setIsCartOpen(true);
    const handleCloseCart = () => setIsCartOpen(false);

    const addToCart = (productToAdd) => {
        const isProductInCart = cart.find(
            (item) => item.id === productToAdd.id
        );

        if (isProductInCart) {
            if (isProductInCart.quantity < productToAdd.stock) {
                setCart(
                    cart.map((item) =>
                        item.id === productToAdd.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                console.log(`Ya no hay mas ${productToAdd.name} disponibles`);
                alert(`Ya no hay mas ${productToAdd.name} disponibles`);
            }
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
        }
    };

    const emptyCart = () => {
        setCart([]);
    };

    const incrementQuantity = (productToIncrement) => {
        const productInCart = cart.find((item) => item.id === productToAdd.id);

        if (
            productInCart &&
            productInCart.quantity < productToIncrement.quantity
        ) {
            setCart(
                cart.map((item) =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else if (productInCart) {
            console.log(`Ya no hay mas ${productToAdd.name} disponibles`);
            alert(`Ya no hay mas ${productToAdd.name} disponibles`);
        }
    };

    const decrementQuantity = (productToDecrement) => {
        const productInCart = cart.find((item) => item.id === productToAdd.id);

        if (productInCart) {
            if (productToDecrement === 1) {
                removeItemFromCart(productToDecrement);
            } else {
                setCart(
                    cart.map((item) =>
                        item.id === product.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                );
            }
        }
    };

    const removeItemFromCart = (productToRemove) => {
        setCart(
            cart.map((item) =>
                item.id !== productToRemove.id
            )
        );
    };



    return (
        <CartContext.Provider
            value={{
                cart,
                products,
                loader,
                error,
                addToCart,
                removeItemFromCart,
                handleOpenCart,
                handleCloseCart,
                isCartOpen,
                emptyCart,
                incrementQuantity,
                decrementQuantity,
                isAuthenticated,
                loginUser,
                logoutUser
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
