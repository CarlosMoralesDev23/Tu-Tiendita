import React, { useContext } from "react";
import VaciarCarrito from "../../assets/Generals/ImgCart/vaciarCarrito.png";
import { CartContext } from "../../context/CartContext";

const EmptyAndPay = ({
    handleOpenPaymentModal,
}) => {
    const {emptyCart, total} = useContext(CartContext);

    return (
        <>
            <div className="totalAPagar">
                <h3>Total a pagar: ${total.toFixed(2)}</h3>
            </div>
            <div className="cartActions">
                <button
                    className="checkoutButton"
                    onClick={handleOpenPaymentModal}
                >
                    Pagar
                </button>
                <div className="vaciarCarrito">
                    <button onClick={emptyCart}>
                        <img src={VaciarCarrito} alt="Vaciar carrito" />
                        <span>Vaciar Carrito</span>
                    </button>
                </div>
            </div>
        </>
    );
};

export default EmptyAndPay;
