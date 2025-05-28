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
            .catch((errorFromFetch) => {
                console.log("Error: ", errorFromFetch);
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
        const productInCart = cart.find((item) => item.id === productToIncrement.id);

        if (
            productInCart &&
            productInCart.quantity < productToIncrement.stock
        ) {
            setCart(
                cart.map((item) =>
                    item.id === productToIncrement.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                )
            );
        } else if (productInCart) {
            console.log(`Ya no hay mas ${productInCart.name} disponibles`);
            alert(`Ya no hay mas ${productInCart.name} disponibles`);
        }
    };




    const decrementQuantity = (productToDecrement) => {
        const productInCart = cart.find((item) => item.id === productToDecrement.id);

        if (productInCart) {
            if (productInCart === 1) {
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
                logoutUser,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
