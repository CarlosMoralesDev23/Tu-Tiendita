import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FieldDescription = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <>
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

export default FieldDescription;
