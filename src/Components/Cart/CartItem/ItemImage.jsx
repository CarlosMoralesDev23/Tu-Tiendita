import React from "react";

const ItemImage = ({itemImage, itemName}) => {
    return (
        <div className="itemImage">
            <img src={itemImage} alt={itemName} />
        </div>
    );
};

export default ItemImage;
