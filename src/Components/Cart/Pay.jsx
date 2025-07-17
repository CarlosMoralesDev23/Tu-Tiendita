import React, { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Pay = () => {
    const { total, OpenPayModal } = useContext(CartContext);

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
