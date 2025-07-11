import React, { useState, useContext } from "react";
import Swal from "sweetalert2";

import "../Cart/Cart.css";
import CartItem from "./CartItem";
import EmptyAndPay from "../Cart/EmptyAndPay";
import ModalPay from "../Cart/ModalPay";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
    const {
        cart,
        isCartOpen,
        handleCloseCart,
        emptyCart,
        updateProductStockAfterPurchase,
    } = useContext(CartContext);

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleOpenPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };

    const handleClosePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    const handleConfirmPayment = async () => {
        console.log("Pago confirmado a través de SweetAlert2!");

        handleClosePaymentModal();

        await updateProductStockAfterPurchase();

        Swal.fire({
            icon: "success",
            title: "¡Pago exitoso!",
            text: "Gracias por tu compra.",
            timer: 2000,
            timerProgressBar: true,
            showConfirmButton: false,
            didOpen: (toast) => {
                toast.addEventListener("mouseenter", Swal.stopTimer);
                toast.addEventListener("mouseleave", Swal.resumeTimer);
            },
        }).then(() => {
            emptyCart();
            handleCloseCart();
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
