import React, { useState } from "react";
import "../Styles/Layouts/FormAddProducts.css";

const FormAddProducts = ({ onAgregar }) => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        type: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!product.id.trim() || product.id.length < 4) {
            newErrors.id =
                "El ID es obligatorio y debe tener al menos 4 caracteres.";
        }

        if (!product.name.trim() || product.name.length < 2) {
            newErrors.name =
                "El nombre es requerido y debe tener al menos 2 caracteres.";
        }

        if (!product.description.trim() || product.description.length < 8) {
            newErrors.description =
                "La descripción es requerida y debe tener al menos 8 caracteres.";
        }

        const priceNum = parseFloat(product.price);
        if (isNaN(priceNum) || priceNum <= 0) {
            newErrors.price = "El precio es requerido y debe ser mayor a 0.";
        }

        const stockNum = parseInt(product.stock, 10);
        if (isNaN(stockNum) || stockNum < 1) {
            newErrors.stock =
                "El stock debe ser un número entero y mayor o igual a 1.";
        }

        if (!product.image.trim() || product.image.length < 4) {
            newErrors.image =
                "La URL de la imagen es requerida y debe tener al menos 4 caracteres.";
        }

        if (!product.type.trim() || product.type.length < 3) {
            newErrors.type =
                "El tipo de producto es requerido (mínimo 3 caracteres).";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

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
