import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FieldImage = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <>
            <div className="full-width-field">
                <label htmlFor="product-image">Imagen:</label>
                <input
                    type="text"
                    name="image"
                    id="product-image"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
                {errors.image && <p>{errors.image}</p>}
            </div>
        </>
    );
};

export default FieldImage;
