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
            {cart.length === 0 ? (<p>Tu Carrito esta vacio</p>) : (
                cart.map((item, index) => (
                    <div className="itemContainer" key={item.id || index}>

                        <div className="itemImage">
                            <img src={item.image} alt="" />
                        </div>
                        
                        <div className="itemDetails">
                            <h3>{item.name}</h3>
                            <span className="price">
                                Precio: $
                                {(item.price).toFixed(2)}
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
                                {item.stock}
                            </span>
                        </div>
                        <div className="itemSubtotal">
                            <h4 className="subTotal">
                                Subtotal:
                            </h4>
                            <span>{(item.price*item.quantity).toFixed(2)} $</span>
                        </div>
                        <div className="deleteItem">
                            <button onClick={() => removeItemFromCart(item)}>
                                <img
                                    src={ImageTrash}
                                    alt={`Eliminar`}
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
