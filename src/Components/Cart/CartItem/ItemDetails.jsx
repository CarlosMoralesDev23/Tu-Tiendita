import React from "react";

const ItemDetails = ({item}) => {
    return (
        <div className="itemDetails">
            <h3>{item.name}</h3>
            <span className="price">
                Precio: ${(parseFloat(item.price) || 0).toFixed(2)}
            </span>
        </div>
    );
};

export default ItemDetails;
