import { CartContext } from "../../context/CartContext";
import React, { useContext } from "react";

const CloseCart = () => {
    const { toDoCloseCart } = useContext(CartContext);

    return (
        <button className="closeButton" onClick={toDoCloseCart}>
            <i className="fa-solid fa-right-from-bracket"></i>
        </button>
    );
};

export default CloseCart;
