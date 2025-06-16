import React, { useContext } from "react";
import FormAddProducts from "./FormAddProducts.jsx";
import AdminContext from "../../context/AdminContext.jsx";

const AdminOpenForm = () => {
    const { openForm, setOpenForm, agregarProducto } = useContext(AdminContext);

    return (
        <div className={`form-sidebar-container ${openForm ? "open" : ""}`}>
            <FormAddProducts onAgregar={agregarProducto} />
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
