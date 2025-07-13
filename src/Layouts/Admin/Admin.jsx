import React, { useContext, useEffect } from "react";
import Loader from "../../Utils/Loader/Loader.jsx";
import "./AdminCSS/Admin.css";
import AdminNotFound from "./AdminNotFound.jsx";
import AdminNav from "./AdminNav.jsx";
import AdminProducts from "./AdminProducts.jsx";
import AdminOpenForm from "./AdminOpenForm.jsx";

import { ProductContext } from "../../context/ProductContext.jsx";
import { AdminContext } from "../../context/AdminContext.jsx";

const Admin = () => {
    const { products, loading, error, fetchAllProducts } =
        useContext(ProductContext);
    const {
        setOpenForm,
        openForm,
        adminMessage,
        adminLoading,
        adminError,
        setSelectedProductToEdit,
    } = useContext(AdminContext);

    useEffect(() => {
        fetchAllProducts();
    }, [fetchAllProducts]);

    const handleAddProductClick = () => {
        setSelectedProductToEdit(null);
        setOpenForm(true);
    };

    return (
        <div className="container">
            {adminLoading && (
                <p className="admin-status-message loading">Procesando...</p>
            )}
            {adminError && (
                <p className="admin-status-message error">
                    Error: {adminError}
                </p>
            )}
            {adminMessage && !adminError && !adminLoading && (
                <p className="admin-status-message success">{adminMessage}</p>
            )}

            {error ? (
                <>
                    <AdminNotFound />
                </>
            ) : loading ? (
                <Loader />
            ) : (
                <>
                    <AdminNav />
                    <button
                        className="add-product-btn"
                        onClick={handleAddProductClick}
                    >
                        Agregar producto nuevo
                    </button>
                    <AdminProducts products={products} />
                    <button
                        className="add-product-btn"
                        onClick={handleAddProductClick}
                    >
                        Agregar producto nuevo
                    </button>
                </>
            )}

            {openForm && <AdminOpenForm />}
        </div>
    );
};

export default Admin;
