import React, { useState, useEffect, useContext } from "react";
import Loader from "../../Components/Reusables/Loader/Loader.jsx";


import "../../Styles/Layouts/Admin.css";
import AdminNotFound from "./AdminNotFound.jsx";
import AdminNav from "./AdminNav.jsx";
import AdminProducts from "./AdminProducts.jsx";
import AdminOpenForm from "./AdminOpenForm.jsx";
import AdminCloseForm from "./AdminCloseForm.jsx";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [fetchError, setFetchError] = useState(false);


    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Error HTTP: ${response.status} - ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("Error al cargar datos iniciales:", error);
                setFetchError(true);
                setLoading(false);
            });
    }, []);



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
                    <h1 className="title">Panel Administrativo</h1>

                    <AdminProducts productos={productos} />
                </>
            )}

            <button onClick={() => setOpenForm(true)}>
                Agregar producto nuevo
            </button>

            {openForm && (
                <AdminOpenForm openForm={openForm} setOpenFor={setOpenForm} setProductos={setProductos}/>
            )}
            {openForm && <AdminCloseForm setOpenFor={setOpenForm} />}
        </div>
    );
};

export default Admin;
