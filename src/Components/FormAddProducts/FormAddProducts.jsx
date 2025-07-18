import React, { useContext, useEffect } from "react";
import "../FormAddProducts/FormAddProducts.css";
import { FormAddProductsContext } from "../../context/FormAddProductsContext";
import { AdminContext } from "../../context/AdminContext";
import FieldPrice from "./FieldPrice";
import FieldStock from "./FieldStock";
import FieldImage from "./FieldImage";
import FieldType from "./FieldType";
import FieldName from "./FieldName";
import FieldDescription from "./FieldDescription";

const FormAddProducts = () => {
    const {
        product,
        setProduct,
        setErrors,
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
            agregarProducto(product);
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

                <div className="id-price-stock-group">
                    <FieldPrice/>
                    <FieldStock/>
                </div>

                <FieldName/>
                <FieldDescription/>

                <FieldImage/>
                <FieldType/>

            </div>
            <button type="submit">{buttonText}</button>
        </form>
    );
};

export default FormAddProducts;
