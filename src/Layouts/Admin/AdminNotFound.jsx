import React from "react";
import NotFound from "../../Utils/NotFound";
import "./AdminCSS/AdminNotFound.css"

const AdminNotFound = () => {
    return (
        <>
            <p className="admin-not-found-message">
                Error al cargar los productos. Por favor, verifica la consola.
            </p>
            <NotFound />
        </>
    );
};

export default AdminNotFound;
