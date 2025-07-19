import React from "react";
import Stars from "../../../Utils/Stars.jsx";

const ProductRating = ({ product = {} }) => {

    return (
        <div className="valoracion">
            <Stars rating={product.rating} />
        </div>
    );
};

export default ProductRating;
