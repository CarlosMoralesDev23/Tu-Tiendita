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
        </div>
    );
};

export default FormAddProductsIdPriceStock;
