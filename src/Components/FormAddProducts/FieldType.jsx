import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FieldType = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <>
            <div className="full-width-field">
                <label htmlFor="product-type">Tipo:</label>
                <select
                    name="type"
                    id="product-type"
                    value={product.type}
                    onChange={handleChange}
                    required
                >
                    <option value="">Selecciona un tipo</option>
                    <option value="ball">Ball</option>
                    <option value="tshirt">T-Shirt</option>
                    <option value="shoes">Shoes</option>
                    <option value="shoes">Socks</option>
                </select>
                {errors.type && <p>{errors.type}</p>}
            </div>
        </>
    );
};

export default FieldType;
