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
        toDoCloseCart,
        emptyCart,
        ChangeStockAfterPurchase,
    } = useContext(CartContext);

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

    let cartClassName = "cartContainer";
    if (isCartOpen) {
        cartClassName += " open";
    }

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h2>Carrito de compras</h2>


                <button className="closeButton" onClick={toDoCloseCart}>
                    <i
                        className="fa-solid fa-right-from-bracket"
                    ></i>
                </button>


            </div>

            <CartItem />

            {cart.length > 0 && (
                <EmptyAndPay OpenPayModal={OpenPayModal} />
            )}

            <ModalPay
                isPayModalOpen={isPayModalOpen}
                ClosePayModal={ClosePayModal}
                ConfirmPay={ConfirmPay}
            />
        </div>
    );
};

export default Cart;
