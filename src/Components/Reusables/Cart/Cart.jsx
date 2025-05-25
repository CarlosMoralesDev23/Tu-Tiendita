import React, { useState } from "react";

import "../../../Styles/Reusables/Cart.css"; 
import Cerrar from "../../../assets/ImgCart/signo-cerrado.png";
import CartItem from "./CartItem";
import EmptyAndPay from "../Cart/EmptyAndPay"
import ModalPay from "../Cart/ModalPay"



const Cart = ({
    isCartOpen,
    handleCloseCart,
    cart = [],
    emptyCart,
    incrementQuantity,
    decrementQuantity,
    removeItemFromCart,
}) => {

    const total = cart.reduce((suma, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return suma + price * quantity;
    }, 0);

    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);

    const handleOpenPaymentModal = () => {
        setIsPaymentModalOpen(true);
    };

    const handleClosePaymentModal = () => {
        setIsPaymentModalOpen(false);
    };

    const handleConfirmPayment = () => {
        console.log("Pago confirmado a través de MUI Modal!");
        alert("¡Gracias por tu compra!"); 
        handleClosePaymentModal(); 

        emptyCart();

        setTimeout(() => {
            handleCloseCart()
        }, 500);
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
                    <img src={Cerrar} alt="Cerrar carrito" />
                </button>
            </div>



            <CartItem cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItemFromCart={removeItemFromCart}   />



            {cart.length > 0 && (
                <EmptyAndPay total={total} handleOpenPaymentModal={handleOpenPaymentModal} emptyCart={emptyCart}   />
            )}


            <ModalPay isPaymentModalOpen={isPaymentModalOpen} handleClosePaymentModal={handleClosePaymentModal} total={total} handleConfirmPayment={handleConfirmPayment} />


        </div>
    );
};

export default Cart;
