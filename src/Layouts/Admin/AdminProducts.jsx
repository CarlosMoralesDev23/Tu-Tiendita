import React from "react";
import "./AdminCSS/AdminProducts.css";
import AdminProductsStock from "./AdminProductsStock";
import AdminProductsEditDelet from "./AdminProductsEditDelet";

const AdminProducts = ({ products }) => {
    if (!products || products.length === 0) {
        return (
            <p className="no-products-message">
                No hay productos para mostrar.
            </p>
        );
    }

    return (
        <ul className="admin-list">
            {products.map((product) => (
                <li key={product.id} className="admin-list-item">
                    <p style={{fontSize:"16px", marginBottom:"5px"}}>ID : {product.id}</p>
                    <img
                        src={product.image || product.imagen}
                        alt={product.name || product.nombre}
                        className="admin-list-item-image"
                    />
                    <span className="admin-list-product-name">
                        {product.name || product.nombre}
                    </span>
                    <span className="admin-list-product-price">
                        ${product.price || product.precio}
                    </span>
                    <div className="admin-list-product-description">
                        <p>{product.description || product.descripcion}</p>
                    </div>

                    <AdminProductsStock product={product} />
                    <AdminProductsEditDelet product={product} />
                </li>
            ))}
        </ul>
    );
};

export default AdminProducts;
