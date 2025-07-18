import React from "react";
import { Link } from "react-router-dom";


const ProductBotonSeeMore = ({ product = {} }) => {

    const isOutOfStock = product.stock <= 0;

    return (
        <div className="contenedorVerMas">
            {isOutOfStock ? (
                <span className="disabled-link-button">Ver Mas</span>
            ) : (
                <Link to={`/products/${product.id}`}>Ver Mas</Link>
            )}
        </div>
    );
};

export default ProductBotonSeeMore;
