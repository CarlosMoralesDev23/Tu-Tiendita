import React, {useContext} from "react";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { CartContext } from "../../context/CartContext";


const ModalPay = ({isPaymentModalOpen, handleClosePaymentModal, handleConfirmPayment}) => {

    const {total} = useContext(CartContext)
    
    const styleModalBox = {
        color: "black",
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
    );
};

export default ModalPay;
