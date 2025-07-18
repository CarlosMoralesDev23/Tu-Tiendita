import React from "react";


const ProductStock = ({ product = {} }) => {

    const isOutOfStock = product.stock <= 0;

    return (
        <div className="contenedorStock">
            <span>
                {isOutOfStock ? (
                    <span style={{ color: "red", fontWeight: "bold" }}>
                        Agotado
                    </span>
                ) : (
                    `Disponibles: ${product.stock}`
                )}
            </span>
        </div>
    );
};

export default ProductStock;
