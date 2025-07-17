import React from "react";

const ItemDetails = ({itemName, itemPrice}) => {
    return (
        <div className="itemDetails">
            <h3>{itemName}</h3>
            <span className="price">
                Precio: ${(parseFloat(itemPrice) || 0).toFixed(2)}
            </span>
        </div>
    );
};

export default ItemDetails;
