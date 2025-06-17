import React, { useContext } from "react";
import FormAddProducts from "../Admin/FormAddProducts/FormAddProducts.jsx";

import { AdminContext } from "../../context/AdminContext.jsx"; 
import { FormAddProductsProvider } from "../../context/FormAddProductsContext.jsx"; 

import "../../Styles/AdminCSS/AdminOpenForm.css"

const AdminOpenForm = () => {
    const { setOpenForm, agregarProducto } = useContext(AdminContext);

    return (
        <div className={`form-sidebar-container ${true ? "open" : ""}`}>
            <FormAddProductsProvider>
                <FormAddProducts onAgregar={agregarProducto} />
            </FormAddProductsProvider>

            <button
                onClick={() => setOpenForm(false)}
                style={{ marginTop: "10px" }}
            >
                Cerrar Formulario
            </button>
        </div>
    );
};

export default AdminOpenForm;
