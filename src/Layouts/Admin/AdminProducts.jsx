import React from "react";

const AdminProducts = ({productos}) => {
    return (
        <ul className="list">
            {productos.map((product) => (
                <li key={product.id} className="listItem">
                    <img
                        src={product.image || product.imagen}
                        alt={product.name || product.nombre}
                        className="listItemImage"
                    />
                    <span>{product.name || product.nombre}</span>
                    <span>${product.price || product.precio}</span>
                    <div>
                        <button className="editButton">
                            <i className="fa-solid fa-pencil"></i>
                        </button>
                        <button className="deleteButton">
                            <i className="fa-solid fa-trash"></i>
                        </button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default AdminProducts;
