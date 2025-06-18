import React, { useState, useContext } from "react";
import "../../../Styles/AdminCSS/FormAddProducts.css";
import { FormAddProductsContext } from "../../../context/FormAddProductsContext";

const FormAddProductsNameDescription = () => {

        const {
            product,
            errors,
            handleChange,
        } = useContext(FormAddProductsContext);
        
    return (
        <>
            <div className="full-width-field">
                <label htmlFor="productName">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    id="productName"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>

            <div className="full-width-field">
                <label htmlFor="productDescription">Descripción:</label>
                <textarea
                    name="description"
                    id="productDescription"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                {errors.description && (
                    <p style={{ color: "red" }}>{errors.description}</p>
                )}
            </div>
        </>
    );
};

export default FormAddProductsNameDescription;
