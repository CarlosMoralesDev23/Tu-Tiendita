import React, { useContext } from "react";
import FormAddProducts from "../../Components/FormAddProducts/FormAddProducts.jsx";

import { AdminContext } from "../../context/AdminContext.jsx";
import { FormAddProductsProvider } from "../../context/FormAddProductsContext.jsx";

import "./AdminCSS/AdminOpenForm.css";

const AdminOpenForm = () => {
    const { setOpenForm, agregarProducto, setSelectedProductToEdit } =
        useContext(AdminContext);

    const handleCloseForm = () => {
        setSelectedProductToEdit(null);
        setOpenForm(false);
    };

    return (
        <div className={`form-sidebar-container ${true ? "open" : ""}`}>
            <FormAddProductsProvider>
                <FormAddProducts/>
            </FormAddProductsProvider>

            <button onClick={handleCloseForm} style={{ marginTop: "10px" }}>
                Cerrar Formulario
            </button>
        </div>
    );
};

export default AdminOpenForm;
