import React, { useState } from "react";

import ImageTrash from "../../../assets/ImgCart/Trash.png";
import "../../../Styles/Reusables/Cart.css"; 
import Cerrar from "../../../assets/ImgCart/signo-cerrado.png";
import VaciarCarrito from "../../../assets/ImgCart/vaciarCarrito.png";

import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

const Cart = ({
    isCartOpen,
    handleCloseCart,
    cart = [],
    emptyCart,
    incrementQuantity,
    decrementQuantity,
    removeItemFromCart,
}) => {

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

    const total = cart.reduce((suma, item) => {
        const price = parseFloat(item.price) || 0;
        const quantity = parseInt(item.quantity, 10) || 0;
        return suma + price * quantity;
    }, 0);

    let cartClassName = "cartContainer";
    if (isCartOpen) {
        cartClassName += " open";
    }

    const styleModalBox = {
        color:"black",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "90%",
        maxWidth: 450,
        bgcolor: "background.paper",
        border: "1px solid #ccc",
        borderRadius: "8px",
        boxShadow: 24, 
        p: { xs: 2, sm: 3, md: 4 }, // Padding responsivo (e.g., 16px, 24px, 32px)
        textAlign: "center",
    };

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h2>Carrito de compras</h2>
                <button className="closeButton" onClick={handleCloseCart}>
                    <img src={Cerrar} alt="Cerrar carrito" />
                </button>
            </div>

            <div className="cartItemsContainer">
                {cart.length === 0 ? (
                    <p style={{ textAlign: "center", padding: "20px" }}>
                        Tu Carrito esta vacio
                    </p>
                ) : (
                    cart.map((item, index) => (
                        <div className="itemContainer" key={item.id || index}>
                            {" "}
                            <div className="itemDetails">
                                <h3>{item.name}</h3>
                                <span className="price">
                                    Precio: $
                                    {item.price
                                        ? parseFloat(item.price).toFixed(2)
                                        : "0.00"}
                                </span>
                            </div>
                            <div className="itemQuantityControls">
                                <div>
                                    <button
                                        onClick={() => decrementQuantity(item)}
                                    >
                                        -
                                    </button>
                                    <span className="quantity">
                                        {item.quantity || 0}
                                    </span>
                                    <button
                                        onClick={() => incrementQuantity(item)}
                                    >
                                        +
                                    </button>
                                </div>
                                <span className="available">
                                    Disponible:{" "}
                                    {item.stock !== undefined
                                        ? item.stock
                                        : "N/A"}
                                </span>
                            </div>
                            <div className="itemSubtotal">
                                <span className="subTotal">
                                    Subt: $
                                    {item.price && item.quantity
                                        ? (
                                                parseFloat(item.price) *
                                                parseInt(item.quantity, 10)
                                            ).toFixed(2)
                                        : "0.00"}
                                </span>
                            </div>
                            <div className="deleteItem">
                                <button
                                    onClick={() => removeItemFromCart(item)}
                                >
                                    <img
                                        src={ImageTrash}
                                        alt={`Eliminar ${item.name}`}
                                    />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <>
                    <div className="totalAPagar">
                        <h3>Total a pagar: ${total.toFixed(2)}</h3>
                    </div>
                    <div className="cartActions">
                        {" "}
                        {/* Contenedor para los botones de acción */}
                        {/* Botón Pagar ahora abre el modal de MUI */}
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
            )}

            <Modal
                open={isPaymentModalOpen}
                onClose={handleClosePaymentModal} // Se llama al presionar Escape o hacer clic en el fondo
                aria-labelledby="payment-modal-title"
                aria-describedby="payment-modal-description"
            >
                <Box sx={styleModalBox}>
                    <Typography
                        id="payment-modal-title"
                        variant="h6"
                        component="h2"
                        sx={{ mb: 2 }}
                    >
                        Confirmar Pago
                    </Typography>
                    <Typography id="payment-modal-description" sx={{ mb: 1 }}>
                        Total a pagar: <strong>${total.toFixed(2)}</strong>
                    </Typography>
                    <Typography sx={{ mb: 3 }}>
                        ¿Deseas continuar con la transacción?
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-around",
                            gap: "10px",
                            flexWrap: "wrap",
                        }}
                    >
                        <Button
                            variant="contained"
                            color="success"
                            onClick={handleConfirmPayment}
                        >
                            Sí, Pagar
                        </Button>
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleClosePaymentModal}
                        >
                            Cancelar
                        </Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    );
};

export default Cart;
