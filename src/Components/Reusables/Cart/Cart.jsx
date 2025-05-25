import React, { useState } from "react";

import "../../../Styles/Reusables/Cart.css"; 
import Cerrar from "../../../assets/ImgCart/signo-cerrado.png";
import CartItem from "./CartItem";
import EmptyAndPay from "../Cart/EmptyAndPay"

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



            <CartItem cart={cart} incrementQuantity={incrementQuantity} decrementQuantity={decrementQuantity} removeItemFromCart={removeItemFromCart}   />



            {cart.length > 0 && (
                <EmptyAndPay total={total} handleOpenPaymentModal={handleOpenPaymentModal} emptyCart={emptyCart}   />
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
