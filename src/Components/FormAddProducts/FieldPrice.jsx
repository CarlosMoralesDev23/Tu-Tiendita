import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FieldPrice = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <div>
            <label htmlFor="product-price">Precio:</label>
            <input
                type="number"
                name="price"
                id="product-price"
                value={product.price}
                onChange={handleChange}
                required
                min="0"
            />
            {errors.price && <p>{errors.price}</p>}
        </div>
    );
};

export default FieldPrice;
