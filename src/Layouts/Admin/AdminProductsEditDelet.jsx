import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";

const AdminProductsEditDelet = ({ product }) => {
    // Recibe el producto como prop
    const { eliminarProducto, setSelectedProductToEdit, setOpenForm } =
        useContext(AdminContext);

    const handleEditClick = () => {
        setSelectedProductToEdit(product); 
        setOpenForm(true); 
    };

    const handleDeleteClick = () => {
        if (
            window.confirm(
                `¿Estás seguro de que quieres eliminar "${
                    product.name || product.nombre
                }"?`
            )
        ) {
            eliminarProducto(product.id); 
        }
        
    };

    return (
        <div className="admin-actions">
            <button className="edit-btn" onClick={handleEditClick}>
                <FontAwesomeIcon icon={faPenToSquare} />
            </button>
            <button className="delete-btn" onClick={handleDeleteClick}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </div>
    );
};

export default AdminProductsEditDelet;
