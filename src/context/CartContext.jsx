import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { AdminContext } from "./AdminContext";
import Swal from "sweetalert2";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const {
        products,
        loading: loadingProducts,
        error: productError,
    } = useContext(ProductContext);

    const { actualizarProducto } = useContext(AdminContext);

    const [cart, setCart] = useState(() => {
        const CartFromLocalStorage = localStorage.getItem("cart");
        try {
            return CartFromLocalStorage ? JSON.parse(CartFromLocalStorage) : [];
        } catch (e) {
            console.error("Error al parsear el carrito de localStorage:", e);
            return [];
        }
    });

    const [isCartOpen, setIsCartOpen] = useState(false);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    const toDoOpenCart = () => setIsCartOpen(true);
    const toDoCloseCart = () => setIsCartOpen(false);

    const addToCart = (productToAdd) => {
        if (loadingProducts || productError) {
            console.log("Productos no cargados aún o hay un error.");

            //*Alert para cuando por alguna razon no se cargaron los productos  o se esten actualizando desde Admin. 
            Swal.fire({
                icon: "error",
                title: "Error al agregar",
                text: "No se pueden agregar productos al carrito. Por favor, inténtalo de nuevo más tarde.",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
            });
            return;
        }

        //*Lo busca en cart
        const isThisProductInCart = cart.find(
            (item) => item.id === productToAdd.id
        );

        if (isThisProductInCart) {
            //*Lo busca en products
            const productInfo = products.find(
                (product) => product.id === productToAdd.id
            );

            //*Si el producto si esta en la base de datos y esta en el cart, y la cantidad en cart es menor a la base de dato...
            if (
                productInfo &&
                isThisProductInCart.quantity < productInfo.stock
            ) {
                //*Voy a setear el producto al cart y subir su cantidad en +1
                setCart(
                    cart.map((item) =>
                        item.id === productToAdd.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
                //*Modal para cuando se agrega un producto que ya estaba en el carrito
                Swal.fire({
                    icon: "success",
                    title: `Se agregó otra unidad de ${productToAdd.name} al carrito.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                });
            } else {
                console.log(
                    `Ya no hay más ${productToAdd.name} disponibles (stock: ${
                        productInfo ? productInfo.stock : "N/A"
                    })`
                );
                //*Modal para cuando se intenta agregar otra unidad y no hay mas disponibles.
                Swal.fire({
                    icon: "warning",
                    title: "Sin stock disponible",
                    text: `Ya no hay más ${productToAdd.name} disponibles.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                });
            }

            //*Si no estaba en el carrito...
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);

            //*Modal para cuando se agrega por primera vez al carrito.
            Swal.fire({
                icon: "success",
                title: `${productToAdd.name} agregado al carrito.`,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 6000,
                timerProgressBar: true,
            });
        }
    };

    const emptyCart = () => {
        setCart([]);

        //*Modal para cuando vacio el carrito
        Swal.fire({
            icon: "info",
            title: "Tu carrito ahora esta vacío",
            text: "Todos los productos han sido eliminados del carrito.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
        });
    };

    const incrementQuantity = (productToIncrement) => {
        const itemInCart = cart.find(
            (item) => item.id === productToIncrement.id
        );

        if (itemInCart) {
            //*Sacar la info del producto de DB
            const productInfo = products.find(
                (p) => p.id === productToIncrement.id
            );

            if (productInfo && itemInCart.quantity < productInfo.stock) {
                setCart(
                    //*incrementar cantidad en +1
                    cart.map((item) =>
                        item.id === productToIncrement.id
                            ? { ...item, quantity: item.quantity + 1 }
                            : item
                    )
                );
                Swal.fire({
                    icon: "success",
                    title: `Se sumo un ${itemInCart.name} más.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                });
            } else {
                console.log(
                    `Stock máximo alcanzado para ${itemInCart.name} (stock: ${
                        productInfo ? productInfo.stock : "N/A"
                    })`
                );
                Swal.fire({
                    icon: "warning",
                    title: "Stock máximo",
                    text: `No hay más stock disponible de ${itemInCart.name}.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                });
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
                Swal.fire({
                    icon: "info",
                    title: `Se restro una unidad de ${itemInCart.name}.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 6000,
                    timerProgressBar: true,
                });
            }
        }
    };

    const removeItemFromCart = (productToRemove) => {
        setCart(cart.filter((item) => item.id !== productToRemove.id));
        Swal.fire({
            icon: "info",
            title: `${productToRemove.name} eliminado del carrito.`,
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 6000,
            timerProgressBar: true,
        });
    };

    const ChangeStockAfterPurchase = async () => {
        //* se ejecuta despues de comprar, e itera cada producto en cart
        for (const item of cart) {
            //* guardemos la info de cada producto, uno a la vez.
            const originalProduct = products.find((p) => p.id === item.id);

            if (originalProduct) {
                //* al producto en DB,  restemosle la cantidad del mismo en el cart
                const newStock = originalProduct.stock - item.quantity;

                //*actualizar la info del producto segun el stock disponible ahora
                const updatedProductData = {
                    ...originalProduct,
                    stock: newStock >= 0 ? newStock : 0,
                };

                //* Esta función se importa del AdminContext y envia... url, petición put, datos
                await actualizarProducto(updatedProductData);
            }
        }
    };

    //! Acá hay una vulnerabilidad si se setean como precio 0,  los productos saldrian gratis.
    const total = cart.reduce((suma, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return suma + price * quantity;
    }, 0);

    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

    //* Funciones del Modal Pay
    const [isPayModalOpen, setIsPayModalOpen] = useState(false);

    const OpenPayModal = () => {
        setIsPayModalOpen(true);
    };

    const ClosePayModal = () => {
        setIsPayModalOpen(false);
    };

    const ConfirmPay = async () => {
        console.log("Pago confirmado!");

        ClosePayModal();

        await ChangeStockAfterPurchase();

        Swal.fire({
            icon: "success",
            title: "¡Pago exitoso!",
            text: "Gracias por tu compra.",
            timer: 1750,
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        }).then(() => {
            emptyCart();
            toDoCloseCart();
        });
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                products,
                loader: loadingProducts,
                error: productError,
                addToCart,
                removeItemFromCart,
                toDoOpenCart,
                toDoCloseCart,
                isCartOpen,
                emptyCart,
                incrementQuantity,
                decrementQuantity,
                total,
                ChangeStockAfterPurchase,
                itemCount,
                isPayModalOpen,
                OpenPayModal,
                ClosePayModal,
                ConfirmPay,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
