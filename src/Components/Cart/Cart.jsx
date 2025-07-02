import React, { useState, useContext } from "react";
import Swal from "sweetalert2"; // Importa SweetAlert2

import "../Cart/Cart.css";
import CartItem from "./CartItem";
import EmptyAndPay from "../Cart/EmptyAndPay";
import ModalPay from "../Cart/ModalPay";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const { cart, isCartOpen, handleCloseCart, emptyCart } =
        useContext(CartContext);

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleOpenPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };

    const handleClosePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    const handleConfirmPayment = () => {
        console.log("Pago confirmado a través de SweetAlert2!");

        // 1. Cerrar el modal de pago inmediatamente
        handleClosePaymentModal();

        // 2. Mostrar SweetAlert2
        Swal.fire({
            icon: "success",
            title: "¡Pago exitoso!",
            text: "Gracias por tu compra.",
            timer: 2000, // Duración en milisegundos (2 segundos)
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        }).then(() => {
            // 3. Esta función se ejecuta después de que SweetAlert2 se cierra
            emptyCart(); // Vaciar el carrito
            handleCloseCart(); // Cerrar el carrito lateral
        });
    };

    let cartClassName = "cartContainer";
    if (isCartOpen) {
        cartClassName += " open";
    }

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h2>Carrito de compras</h2>
                <button className="closeButton" onClick={handleCloseCart}>
                    <i
                        className="fa-solid fa-right-from-bracket"
                        style={{ backgroundColor: "black" }}
                    ></i>
                </button>
            </div>

            <CartItem />

            {cart.length > 0 && (
                <EmptyAndPay handleOpenPaymentModal={handleOpenPaymentModal} />
            )}

            <ModalPay
                isPaymentModalOpen={isPaymentModalOpen}
                handleClosePaymentModal={handleClosePaymentModal}
                handleConfirmPayment={handleConfirmPayment}
            />
        </div>
    );
};

export default Cart;
