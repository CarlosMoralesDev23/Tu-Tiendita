import React from "react";
import FormAddProducts from "./FormAddProducts.jsx";


const AdminOpenForm = ({openForm, setOpenForm, setProductos}) => {



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
