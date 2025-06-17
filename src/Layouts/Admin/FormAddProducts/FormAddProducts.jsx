import React, { useState, useContext } from "react";
import "../../../Styles/AdminCSS/FormAddProducts.css";
import { FormAddProductsContext } from "../../../context/FormAddProductsContext"


const FormAddProducts = ({ onAgregar }) => {

    const {
        product,
        setProduct,
        errors,
        setErrors,
        handleChange,
        validateForm,
    } = useContext(FormAddProductsContext);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        onAgregar(product);

        setProduct({
            id: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            type: "",
        });
        setErrors({});
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div className="form-grid">

                <div className="id-price-stock-group">
                    <div>
                        <label htmlFor="productId">Id:</label>
                        <input
                            type="text"
                            name="id"
                            id="productId"
                            value={product.id}
                            onChange={handleChange}
                            required
                        />
                        {errors.id && (
                            <p style={{ color: "red" }}>{errors.id}</p>
                        )}
                    </div>
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
                        {errors.price && (
                            <p style={{ color: "red" }}>{errors.price}</p>
                        )}
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
                        {errors.stock && (
                            <p style={{ color: "red" }}>{errors.stock}</p>
                        )}
                    </div>
                </div>

                <div className="full-width-field">
                    <label htmlFor="productName">Nombre:</label>
                    <input
                        type="text"
                        name="name"
                        id="productName"
                        value={product.name}
                        onChange={handleChange}
                        required
                    />
                    {errors.name && (
                        <p style={{ color: "red" }}>{errors.name}</p>
                    )}
                </div>

                <div className="full-width-field">
                    <label htmlFor="productDescription">Descripción:</label>
                    <textarea
                        name="description"
                        id="productDescription"
                        value={product.description}
                        onChange={handleChange}
                        required
                    />
                    {errors.description && (
                        <p style={{ color: "red" }}>{errors.description}</p>
                    )}
                </div>

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
                    {errors.image && (
                        <p style={{ color: "red" }}>{errors.image}</p>
                    )}
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
                    {errors.type && (
                        <p style={{ color: "red" }}>{errors.type}</p>
                    )}
                </div>
                
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormAddProducts;
