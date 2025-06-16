import React, { useContext } from "react";
import Loader from "../../Components/Reusables/Loader/Loader.jsx";


import "../../Styles/Admin/Admin.css";
import AdminNotFound from "./AdminNotFound.jsx";
import AdminNav from "./AdminNav.jsx";
import AdminProducts from "./AdminProducts.jsx";
import AdminOpenForm from "./AdminOpenForm.jsx";
import AdminCloseForm from "./AdminCloseForm.jsx";



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
            {openForm && <AdminCloseForm />}
        </div>
    );
};

export default Admin;
