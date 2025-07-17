import React from "react";

const ItemsSubtotal = ({itemPrice, itemQuantity}) => {
    return (
        <div className="itemSubtotal">
            <h4 className="subTotal">Subtotal:</h4>
            <span>
                {(parseFloat(itemPrice) * itemQuantity || 0).toFixed(2)} $
            </span>
        </div>
    );
};

export default ItemsSubtotal;
