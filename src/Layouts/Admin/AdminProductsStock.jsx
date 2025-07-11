import React from "react";

const AdminProductsStock = ({ product }) => {

    const isOutOfStock = product.stock <= 0;

    return (
        <div className="admin-product-stock-display">

            {isOutOfStock ? (
                <strong style={{ color: "red", fontWeight: "bold", fontSize: "2.5em" }}>Agotado</strong>
            ) : (
                <span style={{ color: "black" }}>Stock : {product.stock}</span>
            )}
        </div>
    );
};



export default AdminProductsStock;
