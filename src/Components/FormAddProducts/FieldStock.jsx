import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FieldStock = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <div>
            <label htmlFor="product-stock">Stock:</label>
            <input
                type="number"
                name="stock"
                id="product-stock"
                value={product.stock}
                onChange={handleChange}
                required
                min="1"
            />
            {errors.stock && <p>{errors.stock}</p>}
        </div>
    );
};

export default FieldStock;
