import React, { createContext, useState } from "react";

export const FormAddProductsContext = createContext();

export const FormAddProductsProvider = ({ children }) => {
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
        <FormAddProductsContext.Provider
            value={{
                product,
                setProduct,
                errors,
                setErrors,
                handleChange,
                validateForm,
                handleSubmit, // Exponemos handleSubmit tal como está aquí
            }}
        >
            {children} {/* Esto permitirá renderizar el FormAddProducts.jsx */}
        </FormAddProductsContext.Provider>
    );
};

export default FormAddProductsContext;
