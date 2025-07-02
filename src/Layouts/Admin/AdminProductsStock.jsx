import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext.jsx";

const AdminProductsStock = ({ product }) => {
    return (
        <div>
            <span style={{ color: "black" }}>Stock : {product.stock}</span>

        </div>
    );
};



export default AdminProductsStock;
