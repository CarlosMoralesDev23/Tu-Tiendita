import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import "../../Styles/Admin/AdminProducts.css";
import HeartEmpty from "../../assets/ImgCardProduct/HeartEmpty.svg";
import StarEmpty from "../../assets/ImgCardProduct/StarEmpty.svg";

const AdminProducts = () => {
    const { productos } = useContext(AdminContext);

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
                    <div>
                        <button className="edit-button">
                            <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button className="delete-button">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default AdminProducts;
