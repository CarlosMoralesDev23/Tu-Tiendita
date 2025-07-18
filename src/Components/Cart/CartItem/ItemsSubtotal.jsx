import React from "react";

const ItemsSubtotal = ({item}) => {
    return (
        <div className="itemSubtotal">
            <h4 className="subTotal">Subtotal:</h4>
            <span>
                {(parseFloat(item.price) * item.quantity || 0).toFixed(2)} $
            </span>
        </div>
    );
};

export default ItemsSubtotal;
