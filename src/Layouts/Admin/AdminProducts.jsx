import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import "../../Styles/Admin/AdminProducts.css";
import AdminProductsStock from "./AdminProductsStock";

const AdminProducts = () => {
    const { productos, eliminarProducto } = useContext(AdminContext);

    return (
        <ul className="admin-list">
            {productos.map((product) => (
                <li key={product.id} className="admin-list-item">
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

                    <AdminProductsStock product={product}/>
                </li>
            ))}
        </ul>
    );
};

export default AdminProducts;
