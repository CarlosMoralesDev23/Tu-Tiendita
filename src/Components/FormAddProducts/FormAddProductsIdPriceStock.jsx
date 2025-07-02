import React, { useContext } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";

const FormAddProductsIdPriceStock = () => {
    const { product, errors, handleChange } = useContext(
        FormAddProductsContext
    );

    return (
        <div className="id-price-stock-group">
            <div>
                <label htmlFor="productPrice">Precio:</label>
                <input
                    type="number"
                    name="price"
                    id="productPrice"
                    value={product.price}
                    onChange={handleChange}
                    required
                    min="0"
                />
                {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
            </div>
            <div>
                <label htmlFor="productStock">Stock:</label>
                <input
                    type="number"
                    name="stock"
                    id="productStock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                    min="1"
                />
                {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}
            </div>
        </div>
    );
};

export default FormAddProductsIdPriceStock;
