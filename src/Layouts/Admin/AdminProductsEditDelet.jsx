import React from "react";

const AdminProductsEditDelet = () => {
    return (
        <div>
            <button className="edit-button">
                <i className="fa-solid fa-pencil"></i>
            </button>
            <button
                className="delete-button"
                onClick={() => eliminarProducto(product.id)}
            >
                <i className="fa-solid fa-trash"></i>
            </button>
        </div>
    );
};

export default AdminProductsEditDelet;
