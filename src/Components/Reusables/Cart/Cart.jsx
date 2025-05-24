import React from "react";
import ImageTrash from "../../../assets/ImgCart/Trash.png"

const Cart = ({ isCartOpen, handleCloseCart }) => {
    let drawerClassName = "cart-drawer";
    if (isCartOpen) {
        drawerClassName += " open";
    }

    return (
        <div className={drawerClassName}>
            <div className="cart-header">
                <h2>Carrito de compras</h2>
                <button
                    className="close-button"
                    onClick={() => handleCloseCart()}
                >
                    X
                </button>
            </div>

            <div className="cart-content">
                <div className="cart-item">
                    <div className="item-details">
                        <h3>Nombre del Producto Ejemplo</h3>
                        <span>Precio: $0.00</span>
                    </div>

                    <div className="item-quantity-controls">
                        <button>-</button>
                        <span>0</span>
                        <button>+</button>
                    </div>

                    <div className="item-subtotal">
                        <span>Subtotal: $0.00</span>
                    </div>

                    <div className="delet-item">
                        <button>
                            <img src={ImageTrash} alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
