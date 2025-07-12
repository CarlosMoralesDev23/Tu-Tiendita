import React, { createContext, useState, useEffect, useContext } from "react";
import { ProductContext } from "./ProductContext";

export const AdminContext = createContext();

const MOCK_API_URL =
    "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products"; 

export const AdminProvider = ({ children }) => {

    const [adminLoading, setAdminLoading] = useState(false);
    const [adminError, setAdminError] = useState(null);
    const [adminMessage, setAdminMessage] = useState(null);

    const [openForm, setOpenForm] = useState(false);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null);

    const { fetchAllProducts } = useContext(ProductContext);

    const sendAdminRequest = async (url, method, data = null) => {
        setAdminLoading(true);
        setAdminError(null);
        setAdminMessage(null);

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
            setAdminMessage("¡Operación exitosa!");
            return result;


        } catch (error) {
            console.error("Error en sendAdminRequest:", error);
            setAdminError(error.message);
            setAdminMessage(`Error: ${error.message}`); 
            return null;


        } finally {
            setAdminLoading(false);
            fetchAllProducts();
            setTimeout(() => setAdminMessage(null), 3000);
        }
    };


    
    const agregarProducto = async (nuevoProducto) => {
        const result = await sendAdminRequest(
            MOCK_API_URL,
            "POST",
            nuevoProducto
        );
        return result;
    };

    const eliminarProducto = async (idProducto) => {
        const result = await sendAdminRequest(
            `${MOCK_API_URL}/${idProducto}`,
            "DELETE"
        );
        return result;
    };

    const actualizarProducto = async (productoActualizado) => {
        const result = await sendAdminRequest(
            `${MOCK_API_URL}/${productoActualizado.id}`,
            "PUT",
            productoActualizado
        );
        return result;
    };



    return (
        <AdminContext.Provider
            value={{
                adminLoading,
                adminError,
                adminMessage,
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
