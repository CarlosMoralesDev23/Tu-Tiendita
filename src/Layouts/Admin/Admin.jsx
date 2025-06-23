import React, { useContext } from "react";
import Loader from "../../Utils/Loader/Loader.jsx";


import "./AdminCSS/Admin.css";
import AdminNotFound from "./AdminNotFound.jsx";
import AdminNav from "./AdminNav.jsx";
import AdminProducts from "./AdminProducts.jsx";
import AdminOpenForm from "./AdminOpenForm.jsx";



import { AdminContext } from "../../context/AdminContext.jsx"

const Admin = () => {

    const {fetchError, loading, setOpenForm, openForm} = useContext(AdminContext)


    return (
        <div className="container">
            {fetchError ? (
                <>
                    <AdminNotFound />
                </>
            ) : loading ? (
                <Loader />
            ) : (
                <>
                    <AdminNav />
                    <button onClick={() => setOpenForm(true)}>
                        Agregar producto nuevo
                    </button>
                    <AdminProducts />
                </>
            )}

            {openForm && <AdminOpenForm />}
        </div>
    );
};

export default Admin;
