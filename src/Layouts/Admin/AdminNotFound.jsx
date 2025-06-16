import React from "react";
import NotFound from "../../Components/Reusables/NF404/NotFound";
import "../../Styles/AdminCSS/AdminNotFound.css"

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
