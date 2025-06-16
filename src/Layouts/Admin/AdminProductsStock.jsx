import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext.jsx";

const AdminProductsStock = ({ product }) => {
    return (
        <div>
            <button>
                <i className="fa-solid fa-minus"></i>
            </button>
            <span style={{ color: "black" }}>{product.stock}</span>
            <button>
                <i className="fa-solid fa-plus"></i>
            </button>
        </div>
    );
};

export default AdminProductsStock;
