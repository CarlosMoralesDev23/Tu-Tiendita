import React from "react";
import ImageTrash from "../../../assets/ImgCart/Trash.png";
import "../../../Styles/Reusables/Cart.css"
import Cerrar from "../../../assets/ImgCart/signo-cerrado.png"
import VaciarCarrito from "../../../assets/ImgCart/vaciarCarrito.png"

const Cart = ({ isCartOpen, handleCloseCart, cart }) => {


    console.log(cart)

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
                {cart.length === 0 ? (
                    <p>Tu Carrito esta vacio</p>
                ) : (
                    cart.map((item) => (
                        <div className="itemContainer" key={item.index}>
                            <div className="itemDetails">
                                <h3>{item.name}</h3>
                                <span className="price">Precio: ${item.price}</span>
                            </div>

                            <div className="itemQuantityControls">
                                <div>
                                    <button>-</button>
                                    <span className="quantity">{item.quantity}</span>
                                    <button>+</button>
                                </div>
                                <span className="available">
                                    Disponible: {item.stock}
                                </span>
                            </div>

                            <div className="itemSubtotal">
                                <span className="subTotal">Subt: ${item.price * item.quantity}</span>
                            </div>

                            <div className="deleteItem">
                                <button>
                                    <img src={ImageTrash} alt="Eliminar item" />
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>

            {cart.length > 0 && (
                <>
                    <div className="totalAPagar">
                        <h3>Total a pagar: 9999.9999</h3>
                    </div>

                    <div className="vaciarCarrito">
                        <button>
                            <img src={VaciarCarrito} alt="vaciar carrito" />
                            <span>Vaciar Carrito</span>
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;
