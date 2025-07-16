import React, { useContext } from "react";
import VaciarCarrito from "../../assets/Generals/ImgCart/vaciarCarrito.png";
import { CartContext } from "../../context/CartContext";

const Empty = ({ OpenPayModal }) => {
    const { emptyCart} = useContext(CartContext);

    return (
        <div className="vaciarCarrito">
            <button onClick={emptyCart}>
                <img src={VaciarCarrito} alt="Vaciar carrito" />
                <span>Vaciar Carrito</span>
            </button>
        </div>
    );
};

export default Empty;
