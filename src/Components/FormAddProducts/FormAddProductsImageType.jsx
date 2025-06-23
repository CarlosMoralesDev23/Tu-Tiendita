import React, { useState, useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FormAddProductsImageType = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <>
            <div className="full-width-field">
                <label htmlFor="productImage">Imagen:</label>
                <input
                    type="text"
                    name="image"
                    id="productImage"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
                {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
            </div>

            <div className="full-width-field">
                <label htmlFor="productType">Tipo:</label>
                <input
                    type="text"
                    name="type"
                    id="productType"
                    value={product.type}
                    onChange={handleChange}
                    required
                />
                {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
            </div>
        </>
    );
};

export default FormAddProductsImageType;
