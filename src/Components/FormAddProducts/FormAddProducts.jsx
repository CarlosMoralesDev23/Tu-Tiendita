import React, { useContext, useEffect } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";
import FormAddProductsIdPriceStock from "./FormAddProductsIdPriceStock";
import FormAddProductsNameDescription from "./FormAddProductsNameDescription";
import FormAddProductsImageType from "./FormAddProductsImageType";
import { AdminContext } from "../../context/AdminContext";

const generateRandomString = (length = 8) => {
    return Math.random()
        .toString(36)
        .substring(2, 2 + length);
};

const FormAddProducts = () => {
    const {
        product,
        setProduct,
        errors,
        setErrors,
        handleChange,
        validateForm,
    } = useContext(FormAddProductsContext);

    const {
        agregarProducto,
        actualizarProducto,
        selectedProductToEdit,
        setSelectedProductToEdit,
        setOpenForm,
    } = useContext(AdminContext);

    useEffect(() => {
        if (selectedProductToEdit) {
            setProduct(selectedProductToEdit);
        } else {
            setProduct({
                id: "",
                name: "",
                description: "",
                price: "",
                stock: "",
                image: "",
                type: "",
            });
        }
        setErrors({});
    }, [selectedProductToEdit, setProduct, setErrors]);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateForm()) {
            return;
        }

        if (selectedProductToEdit) {
            actualizarProducto(product);
        } else {
            const newId = `${product.type}-${generateRandomString()}`;
            const productWithId = { ...product, id: newId };
            agregarProducto(productWithId);
        }

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
        setSelectedProductToEdit(null);
        setOpenForm(false);
    };

    const buttonText = selectedProductToEdit
        ? "Actualizar Producto"
        : "Agregar Producto";
    const formTitle = selectedProductToEdit
        ? "Editar Producto"
        : "Agregar Producto Nuevo";

    return (
        <form onSubmit={handleSubmit}>
            <h2>{formTitle}</h2>
            <div className="form-grid">
                <FormAddProductsIdPriceStock />
                <FormAddProductsNameDescription />
                <FormAddProductsImageType />
            </div>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default FormAddProducts;
