import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import { AdminContext } from "./AdminContext";

import Swal from "sweetalert2"; // Asegúrate de que esta línea esté presente

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const {
        products,
        loading: loadingProducts,
        error: productError,
    } = useContext(ProductContext);

    const { actualizarProducto } = useContext(AdminContext);

    //*Traer el carrito del LS  o empezar vacio.
    const [cart, setCart] = useState(() => {
        const CartFromLocalStorage = localStorage.getItem("cart");
        try {
            return CartFromLocalStorage ? JSON.parse(CartFromLocalStorage) : [];
        } catch (e) {
            console.error("Error al parsear el carrito de localStorage:", e);
            return [];
        }
    });

    //*Estado para mostrar el carrito
    const [isCartOpen, setIsCartOpen] = useState(false);

    //*Si agregamos productos al carrito se guarda en el LS
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    //*Funciones para abrir y cerrar el carrito
    const toDoOpenCart = () => setIsCartOpen(true);
    const toDoCloseCart = () => setIsCartOpen(false);

    const addToCart = (productToAdd) => {
        if (loadingProducts || productError) {
            console.log("Productos no cargados aún o hay un error.");
            Swal.fire({
                icon: "error",
                title: "Error al agregar",
                text: "No se pueden agregar productos al carrito. Por favor, inténtalo de nuevo más tarde.",
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
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
                Swal.fire({
                    icon: "success",
                    title: `Se agregó otra unidad de ${productToAdd.name} al carrito.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                });
            } else {
                console.log(
                    `Ya no hay más ${productToAdd.name} disponibles (stock: ${
                        productInfo ? productInfo.stock : "N/A"
                    })`
                );
                Swal.fire({
                    icon: "warning",
                    title: "Sin stock disponible",
                    text: `Ya no hay más ${productToAdd.name} disponibles.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 3000,
                    timerProgressBar: true,
                });
            }

            //*Si no estaba en el carrito...
        } else {
            setCart([...cart, { ...productToAdd, quantity: 1 }]);
            Swal.fire({
                icon: "success",
                title: `${productToAdd.name} agregado al carrito.`,
                toast: true,
                position: "top-end",
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
            });
        }
    };

    const emptyCart = () => {
        setCart([]);
        Swal.fire({
            icon: "info",
            title: "Carrito vaciado",
            text: "Todos los productos han sido eliminados del carrito.",
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 1500,
            timerProgressBar: true,
        });
    };

    const incrementQuantity = (productToIncrement) => {
        //*En este punto ya el producto esta en el carrito

        //*Acá queremos es obtener basicamente su cantidad, en el carrito, el resto es igual.
        const itemInCart = cart.find(
            (item) => item.id === productToIncrement.id
        );

        //*Si se pudo obtener los datos del item...
        if (itemInCart) {
            //*Sacar la info del producto de DB
            const productInfo = products.find(
                (p) => p.id === productToIncrement.id
            );

            //* Si DB y cantidad menor a DB...
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
                    title: `Cantidad de ${itemInCart.name} incrementada.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 5000,
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
                    text: `No hay más stock disponible para ${itemInCart.name}.`,
                    toast: true,
                    position: "top-end",
                    showConfirmButton: false,
                    timer: 4000,
                    timerProgressBar: true,
                });
            }
        }
    };

    const decrementQuantity = (productToDecrement) => {
        //*En este punto ya el producto esta en el carrito

        //*Acá queremos es obtener basicamente su cantidad, en el carrito, el resto es igual.
        const itemInCart = cart.find(
            (item) => item.id === productToDecrement.id
        );

        //*Si se pudo obtener los datos del item...
        if (itemInCart) {
            //*Si la cantidad en cart  es 1, remover el item
            if (itemInCart.quantity === 1) {
                removeItemFromCart(productToDecrement);
            } else {
                //*si es mayor a 1, disminuir en -1
                setCart(
                    cart.map((item) =>
                        item.id === productToDecrement.id
                            ? { ...item, quantity: item.quantity - 1 }
                            : item
                    )
                );
                Swal.fire({
                    icon: "info",
                    title: `Cantidad de ${itemInCart.name} decrementada.`,
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
        //*Filtrar y regresar todos menos el que tenga ese id.
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

    //*Cambiar el stock luego de la compra
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

    //! Acá hay una vulnerabilidad si se setean como 0,  los productos saldrian gratis.
    const total = cart.reduce((suma, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return suma + price * quantity;
    }, 0);

    //*Contador del carrito
    const itemCount = cart.reduce((count, item) => count + item.quantity, 0);

    //* Funciones del Modal Pay
    //*Modal de pagar
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
            timer: 1250,
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
