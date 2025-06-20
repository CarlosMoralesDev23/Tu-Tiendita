import React, { createContext, useState, useEffect } from "react";

export const AdminContext = createContext();
export const AdminProvider = ({ children }) => {
    const [productos, setProductos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [fetchError, setFetchError] = useState(false);

    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null); 


    useEffect(() => {
        fetch("/data/products.json")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(
                        `Error HTTP: ${response.status} - ${response.statusText}`
                    );
                }
                return response.json();
            })
            .then((data) => {
                setTimeout(() => {
                    setProductos(data);
                    setLoading(false);
                }, 1000);
            })
            .catch((error) => {
                console.error("Error al cargar datos iniciales:", error);
                setFetchError(true);
                setLoading(false);
            });
    }, []);

    const agregarProducto = async (nuevoProducto) => {
        try {
            const respuesta = await fetch(
                "https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify(nuevoProducto),
                }
            );

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
            const respuesta = await fetch(
                `https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product/${idProducto}`,
                { method: "DELETE" }
            );

            if (!respuesta.ok) {
                throw new Error(
                    `Error al eliminar producto: ${respuesta.status} ${respuesta.statusText}`
                );
            }

            alert("Producto eliminado correctamente (desde AdminContext)");
            setProductos((prevProductos) =>
                prevProductos.filter((p) => p.id !== idProducto)
            ); 
        } catch (error) {
            console.error(
                "Error al eliminar el producto (desde AdminContext):",
                error
            );
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
                `https://682e2f0e746f8ca4a47c2dbd.mockapi.io/product/${productoActualizado.id}`,
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
            alert("Producto actualizado correctamente (desde AdminContext)");
            setProductos((prevProductos) =>
                prevProductos.map((p) => (p.id === data.id ? data : p))
            );
        } catch (error) {
            console.error(
                "Error al actualizar el producto (desde AdminContext):",
                error
            );
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
                setOpenForm
            }}
        >
            {children}
        </AdminContext.Provider>
    );
};

export default AdminContext;
