import React from "react";

const ProductImage = ({ product = {} }) => {

    return (
        <div className="contenedorImagen">
            <img src={product.image} alt={product.name} />
        </div>
    );
};

export default ProductImage;
