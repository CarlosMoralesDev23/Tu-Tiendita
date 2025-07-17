import React, { useContext } from "react";
import ImageTrash from "../../assets/Generals/ImgCart/Trash.png";
import { CartContext } from "../../context/CartContext";
import ItemDetails from "./CartItem/ItemDetails";
import ItemImage from "./CartItem/ItemImage";
import ItemQuantityControls from "./CartItem/ItemQuantityControls";
import ItemsSubtotal from "./CartItem/ItemsSubtotal";

const CartItem = () => {
    const { cart, decrementQuantity, incrementQuantity, removeItemFromCart } =
        useContext(CartContext);

    return (
        <div className="cartItemsContainer">
            {cart.length === 0 ? (
                <p style={{"fontSize" : "20px"}}>Tu Carrito esta vacio</p>
            ) : (
                cart.map((item, index) => (
                    <div className="itemContainer" key={item.id || index}>

                        <ItemImage itemImage={item.image} itemName={item.name} />

                        <ItemDetails itemName={item.name} itemPrice = {item.price} />

                        <ItemQuantityControls item={item} />

                        <ItemsSubtotal itemPrice={item.price} itemQuantity={item.quantity}/>

                        <div className="deleteItem">
                            <button onClick={() => removeItemFromCart(item)}>
                                <img src={ImageTrash} alt={`Eliminar`} />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </div>
    );
};

export default CartItem;
