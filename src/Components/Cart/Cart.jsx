import React, { useContext } from "react";

import "../Cart/Cart.css";
import CartItem from "./CartItem";
import Pay from "../Cart/Pay";
import Empty from "../Cart/Empty";
import ModalPay from "../Cart/ModalPay";
import { CartContext } from "../../context/CartContext";
import CloseCart from "./CloseCart";

const Cart = () => {
    const {
        cart,
        isCartOpen,
    } = useContext(CartContext);

    let cartClassName = "cartContainer";
    if (isCartOpen) {
        cartClassName += " open";
    }

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h2>Carrito de compras</h2>

                <CloseCart/>
            </div>

            <CartItem />

            {cart.length > 0 && (
                <>
                    <Pay/>
                    <Empty />
                </>
            )}

            <ModalPay/>
        </div>
    );
};

export default Cart;
