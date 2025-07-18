import React, { useContext} from "react";
import { CartContext } from "../../../context/CartContext";


const OptionCart = () => {

    const { toDoOpenCart, itemCount } = useContext(CartContext);
    
    return (
        <button className="nav-cart-button" onClick={() => toDoOpenCart()}>
            <i className="fa-solid fa-cart-shopping"></i>
            {itemCount > 0 && (
                <span className="cart-item-count">{itemCount}</span>
            )}
        </button>
    );
};

export default OptionCart;
