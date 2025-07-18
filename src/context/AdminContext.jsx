import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";
import Swal from "sweetalert2"; // Importamos SweetAlert2

export const AdminContext = createContext();

const MOCK_API_URL =
    "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products";

export const AdminProvider = ({ children }) => {
    const [adminLoading, setAdminLoading] = useState(false);
    const [adminError, setAdminError] = useState(null);

    const [openForm, setOpenForm] = useState(false);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null);

    const { fetchAllProducts } = useContext(ProductContext);

    const sendAdminRequest = async (url, method, data = null) => {
        setAdminLoading(true);
        setAdminError(null);

        try {
            const options = {
                method: method,
                headers: {
                    "Content-Type": "application/json",
                },
                body: data ? JSON.stringify(data) : null,
            };

            const response = await fetch(url, options);

            if (!response.ok) {
                let errorDetails = `Error HTTP: ${response.status} ${response.statusText}`;

                try {
                    const errorJson = await response.json();
                    errorDetails += ` - ${
                        errorJson.message || JSON.stringify(errorJson)
                    }`;
                } catch (jsonParseError) {
                    errorDetails += " - No se pudo parsear el JSON de error";
                }

                throw new Error(errorDetails);
            }

            const result =
                method === "DELETE" || response.status === 204
                    ? { success: true, message: "Operación exitosa" }
                    : await response.json();
            return result;
        } catch (error) {
            console.error("Error en sendAdminRequest:", error);
            setAdminError(error.message);
            Swal.fire({
                icon: "error",
                title: "Error de operación",
                text: `Ha ocurrido un error: ${error.message}`,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
            });
            return null;
        } finally {
            setAdminLoading(false);
            fetchAllProducts();
        }
    };

    const agregarProducto = async (nuevoProducto) => {
        const result = await sendAdminRequest(
            MOCK_API_URL,
            "POST",
            nuevoProducto
        );
        if (result) {
            Swal.fire({
                icon: "success",
                title: "¡Producto agregado!",
                text: `${nuevoProducto.name} ha sido añadido con éxito.`,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
        }
        return result;
    };

    const eliminarProducto = async (idProducto, productName) => {
        const { isConfirmed } = await Swal.fire({
            title: "¿Estás seguro?",
            text: `¿Quieres eliminar "${productName}"--(ID: ${idProducto})? ¡Esta acción no se puede revertir!`,
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#d33",
            cancelButtonColor: "#3085d6",
            confirmButtonText: "Sí, eliminar",
            cancelButtonText: "Cancelar",
        });

        if (isConfirmed) {
            const result = await sendAdminRequest(
                `${MOCK_API_URL}/${idProducto}`,
                "DELETE"
            );
            if (result) {
                Swal.fire({
                    icon: "success",
                    title: "¡Producto eliminado!",
                    text: `"${productName}" -- (ID: ${idProducto}) ha sido eliminado con éxito.`,
                    timer: 5000,
                    timerProgressBar: true,
                    showConfirmButton: false,
                    didOpen: (toast) => {
                        toast.addEventListener("mouseenter", Swal.stopTimer);
                        toast.addEventListener("mouseleave", Swal.resumeTimer);
                    },
                });
            }
            return result;
        }
        return null; // Si cancela, no hacer nada y return null
    };

    const actualizarProducto = async (productoActualizado) => {
        //*paso  url, petición, datos
        const result = await sendAdminRequest(
            `${MOCK_API_URL}/${productoActualizado.id}`,
            "PUT",
            productoActualizado
        );
        if (result) {
            Swal.fire({
                icon: "success",
                title: "¡Producto actualizado!",
                text: `ID : ${productoActualizado.id} --- ${productoActualizado.name} ha sido actualizado con éxito.`,
                timer: 5000,
                timerProgressBar: true,
                showConfirmButton: false,
                didOpen: (toast) => {
                    toast.addEventListener("mouseenter", Swal.stopTimer);
                    toast.addEventListener("mouseleave", Swal.resumeTimer);
                },
            });
        }
        return result;
    };

    return (
        <AdminContext.Provider
            value={{
                adminLoading,
                adminError,
                openForm,
                setOpenForm,
                selectedProductToEdit,
                setSelectedProductToEdit,
                agregarProducto,
                eliminarProducto,
                actualizarProducto,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};
