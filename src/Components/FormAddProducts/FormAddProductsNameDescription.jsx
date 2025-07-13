import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FormAddProductsNameDescription = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <>
            <div className="full-width-field">
                <label htmlFor="product-name">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    id="product-name"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p>{errors.name}</p>}
            </div>

            <div className="full-width-field">
                <label htmlFor="product-description">Descripción:</label>
                <textarea
                    name="description"
                    id="product-description"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                {errors.description && <p>{errors.description}</p>}
            </div>
        </>
    );
};

export default FormAddProductsNameDescription;
