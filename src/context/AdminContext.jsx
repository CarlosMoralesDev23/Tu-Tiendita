import React, { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null);

    const MOCK_API_URL =
        "https://68293f096075e87073a609b7.mockapi.io/productos-ecommerce/products";

    useEffect(() => {
        setLoading(true);
        setFetchError(false);

        fetch(MOCK_API_URL)
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Error HTTP: ${response.status} - ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setProductos(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error(
                    "Error al cargar datos iniciales desde MockAPI:",
                    error
                );
                setFetchError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (nuevoProducto) => {
        try {
            const respuesta = await fetch(MOCK_API_URL, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(nuevoProducto),
            });

            if (!respuesta.ok) {
                throw new Error(
                    `Error al agregar producto: ${respuesta.status} ${respuesta.statusText}`
                );
            }

            const data = await respuesta.json();
            alert("Producto agregado correctamente");

            setProductos((prevProductos) => [...prevProductos, data]);

            setOpenForm(false);
        } catch (error) {
            console.error("Error al añadir el producto:", error);
            alert(
                `Hubo un error al agregar el producto: ${
                    error.message || "Error desconocido"
                }`
            );
        }
    };

    const eliminarProducto = async (idProducto) => {
        try {
            const respuesta = await fetch(`${MOCK_API_URL}/${idProducto}`, {
                method: "DELETE",
            });

            if (!respuesta.ok) {
                throw new Error(
                    `Error al eliminar producto: ${respuesta.status} ${respuesta.statusText}`
                );
            }

            alert("Producto eliminado correctamente");
            setProductos((prevProductos) =>
                prevProductos.filter((p) => p.id !== idProducto)
            );
        } catch (error) {
            console.error("Error al eliminar el producto:", error);
            alert(
                `Hubo un error al eliminar el producto: ${
                    error.message || "Error desconocido"
                }`
            );
        }
    };

    const actualizarProducto = async (productoActualizado) => {
        try {
            const respuesta = await fetch(
                `${MOCK_API_URL}/${productoActualizado.id}`,
                {
                    method: "PUT",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(productoActualizado),
                }
            );

            if (!respuesta.ok) {
                throw new Error(
                    `Error al actualizar producto: ${respuesta.status} ${respuesta.statusText}`
                );
            }

            const data = await respuesta.json();
            alert("Producto actualizado correctamente");
            setProductos((prevProductos) =>
                prevProductos.map((p) => (p.id === data.id ? data : p))
            );
        } catch (error) {
            console.error("Error al actualizar el producto:", error);
            alert(
                `Hubo un error al actualizar el producto: ${
                    error.message || "Error desconocido"
                }`
            );
        }
    };

    return (
        <AdminContext.Provider
            value={{
                productos,
                loading,
                fetchError,
                selectedProductToEdit,
                setSelectedProductToEdit,
                agregarProducto,
                eliminarProducto,
                actualizarProducto,
                openForm,
                setOpenForm,
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};
