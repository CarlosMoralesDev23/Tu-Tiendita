import React from "react";
import ImageTrash from "../../../assets/ImgCart/Trash.png";


const CartItem = ({
    cart,
    incrementQuantity,
    decrementQuantity,
    removeItemFromCart,
}) => {
    return (
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
                                <button onClick={() => decrementQuantity(item)}>
                                    -
                                </button>
                                <span className="quantity">
                                    {item.quantity || 0}
                                </span>
                                <button onClick={() => incrementQuantity(item)}>
                                    +
                                </button>
                            </div>
                            <span className="available">
                                Disponible:{" "}
                                {item.stock !== undefined ? item.stock : "N/A"}
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
                            <button onClick={() => removeItemFromCart(item)}>
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
    );
};

export default CartItem;
