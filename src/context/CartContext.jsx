import { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState(() => {
        // Intentamos obtener el carrito del localStorage y parsearlo.
        const storedCart = localStorage.getItem("cart");
        try {
            // Si hay un carrito guardado, lo devolvemos.
            return storedCart ? JSON.parse(storedCart) : [];
        } catch (e) {
            console.error("Error al parsear el carrito de localStorage:", e);
            return []; // Si ocurre un error, devuelve un carrito vacío para que no se rompa la app.
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const [loader, setLoader] = useState(true);

    //Guardamos en el localStorage el carrito cada vez que cambia
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

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
    const theBalls = products.filter((product) => product.type === "balon");
    const theTShirts = products.filter((product) => product.type === "remera");
    const theShoes = products.filter((product) => product.type === "zapato");

    const emptyCart = () => {
        setCart([]);
    };

    const incrementQuantity = (productToIncrement) => {
        const itemInCart = cart.find(
            (item) => item.id === productToIncrement.id
        );

        if (itemInCart) {
            if (itemInCart.quantity < productToIncrement.stock) {
                setCart(
                    cart.map((item) =>
                        item.id === productToIncrement.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
            } else {
                console.log(`Stock máximo alcanzado para ${itemInCart.name}`);
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
                theBalls,
                theTShirts,
                theShoes,
                total,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
