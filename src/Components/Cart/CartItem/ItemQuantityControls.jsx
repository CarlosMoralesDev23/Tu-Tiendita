import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

const ItemQuantityControls = ({item}) => {

        const { decrementQuantity, incrementQuantity } =
            useContext(CartContext);

    return (
        <div className="itemQuantityControls">
            <div>
                <button onClick={() => decrementQuantity(item)}>-</button>
                <span className="quantity">{item.quantity || 0}</span>
                <button onClick={() => incrementQuantity(item)}>+</button>
            </div>
            <span className="available">Disponible: {item.stock}</span>
        </div>
    );
};

export default ItemQuantityControls;
