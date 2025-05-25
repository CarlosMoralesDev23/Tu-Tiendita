import React from "react";
import ImageTrash from "../../../assets/ImgCart/Trash.png";
import "../../../Styles/Reusables/Cart.css"
import Cerrar from "../../../assets/ImgCart/signo-cerrado.png"

const Cart = ({ isCartOpen, handleCloseCart }) => {
    let cartClassName = "cartContainer";
    if (isCartOpen) {
        cartClassName += " open";
    }

    return (
        <div className={cartClassName}>
            <div className="cartHeader">
                <h2>Carrito de compras</h2>
                <button className="closeButton" onClick={handleCloseCart}>
                    <img src={Cerrar} alt="" />
                </button>
            </div>

            <div className="cartItemsContainer">
                <div className="itemContainer">
                    <div className="itemDetails">
                        <h3>Nombre del Producto Ejemplo</h3>
                        <span className="price">Precio: $999.00</span>
                    </div>

                    <div className="itemQuantityControls">
                        <div>
                            <button>-</button>
                            <span className="quantity">99</span>
                            <button>+</button>
                        </div>
                        <span className="disponible">Disponible: 999</span>
                    </div>

                    <div className="itemSubtotal">
                        <span className="subTotal">Subt: $999.00</span>
                    </div>

                    <div className="deleteItem">
                        <button>
                            <img src={ImageTrash} alt="Eliminar item" />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;
