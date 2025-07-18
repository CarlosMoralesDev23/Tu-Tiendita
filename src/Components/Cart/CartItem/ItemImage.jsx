import React from "react";

const ItemImage = ({item}) => {
    return (
        <div className="itemImage">
            <img src={item.image} alt={item.name} />
        </div>
    );
};

export default ItemImage;
