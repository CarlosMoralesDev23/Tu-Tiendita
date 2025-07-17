import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FormAddProductsImageType = () => {
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

export default FormAddProductsImageType;
