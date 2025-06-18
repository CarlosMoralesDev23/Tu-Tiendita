import React, { useState, useContext } from "react";
import "../../../Styles/AdminCSS/FormAddProducts.css";
import { FormAddProductsContext } from "../../../context/FormAddProductsContext"
import FormAddProductsIdPriceStock from "./FormAddProductsIdPriceStock";
import FormAddProductsNameDescription from "./FormAddProductsNameDescription";
import FormAddProductsImageType from "./FormAddProductsImageType";


const FormAddProducts = ({ onAgregar }) => {

    const {
        product,
        setProduct,
        errors,
        setErrors,
        handleChange,
        validateForm,
    } = useContext(FormAddProductsContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onAgregar(product);

        setProduct({
            id: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            type: "",
        });
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div className="form-grid">

                <FormAddProductsIdPriceStock/>

                <FormAddProductsNameDescription/>

                <FormAddProductsImageType/>
                
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormAddProducts;
