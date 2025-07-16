import React, { useContext } from "react";
import VaciarCarrito from "../../assets/Generals/ImgCart/vaciarCarrito.png";
import { CartContext } from "../../context/CartContext";

const Pay = ({ OpenPayModal }) => {
    const { emptyCart, total } = useContext(CartContext);

    return (
        <>
            <div className="totalAPagar">
                <h3>Total a pagar: ${total.toFixed(2)}</h3>
            </div>
            <div className="cartActions">
                <button className="checkoutButton" onClick={OpenPayModal}>
                    Pagar
                </button>
            </div>
        </>
    );
};

export default Pay;
