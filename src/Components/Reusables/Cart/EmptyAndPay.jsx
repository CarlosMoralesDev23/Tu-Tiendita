import React from "react";
import VaciarCarrito from "../../../assets/ImgCart/vaciarCarrito.png";


const EmptyAndPay = ({

    emptyCart,

    total,
    handleOpenPaymentModal
}) => {




    return (
        <>
            <div className="totalAPagar">
                <h3>Total a pagar: ${total.toFixed(2)}</h3>
            </div>
            <div className="cartActions">
                {" "}
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
