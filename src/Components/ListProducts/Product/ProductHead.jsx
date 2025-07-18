import React, { useState } from "react";

const ProductHead = ({ product = {} }) => {
    const [isFavorite, setIsFavorite] = useState(false);

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite);
    };

    return (
        <div className="encabezado">
            <h3>{product.name}</h3>
            {isFavorite ? (
                <i
                    className="fa-solid fa-heart heart-icon"
                    style={{ color: "#ff0000", cursor: "pointer"}}
                    onClick={handleFavoriteClick}
                ></i>
            ) : (
                <i
                    className="fa-regular fa-heart heart-icon"
                    onClick={handleFavoriteClick}
                ></i>
            )}
        </div>
    );
};

export default ProductHead;
