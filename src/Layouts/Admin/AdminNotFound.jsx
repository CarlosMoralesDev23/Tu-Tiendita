import React from "react";
import NotFound from "../../Components/Reusables/NF404/NotFound";

const AdminNotFound = () => {
    return (
        <>
            <p style={{ color: "red" }}>
                Error al cargar los productos. Por favor, verifica la consola.
            </p>
            <NotFound />
        </>
    );
};

export default AdminNotFound;
