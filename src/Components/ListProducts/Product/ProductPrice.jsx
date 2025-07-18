import React from "react";


const ProductPrice = ({ product = {} }) => {


    return (
        <div className="contenedorPrecio">
            <span>
                {typeof product.price === "number"
                    ? product.price.toFixed(2)
                    : product.price}
                $
            </span>
        </div>
    );
};

export default ProductPrice;
