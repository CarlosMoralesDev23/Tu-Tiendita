import React, { useState, useEffect } from "react";
import FormAddProducts from "../Layouts/FormAddProducts";
import Loader from "../Components/Reusables/Loader/Loader";
import NotFound from "../Components/Reusables/NF404/NotFound.jsx";

import "../Styles/Layouts/Admin.css";

const Admin = () => {
    const [productos, setProductos] = useState([]);
    const [selectedProductToEdit, setSelectedProductToEdit] = useState(null);
    const [loading, setLoading] = useState(true);
    const [openForm, setOpenForm] = useState(false);
    const [fetchError, setFetchError] = useState(false);

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

    return (
        <div className="container">
            {fetchError ? (
                <>
                    <p style={{ color: "red" }}>
                        Error al cargar los productos. Por favor, verifica la
                        consola.
                    </p>
                    <NotFound />
                </>
            ) : loading ? (
                <Loader />
            ) : (
                <>
                    <nav>
                        <ul className="nav">
                            <li className="navItem">
                                <button className="navButton">
                                    <i className="fa-solid fa-right-from-bracket"></i>
                                </button>
                            </li>
                            <li className="navItem">
                                <a href="/admin">Admin</a>
                            </li>
                        </ul>
                    </nav>
                    <h1 className="title">Panel Administrativo</h1>

                    <ul className="list">
                        {productos.map((product) => (
                            <li key={product.id} className="listItem">
                                <img
                                    src={product.image || product.imagen}
                                    alt={product.name || product.nombre}
                                    className="listItemImage"
                                />
                                <span>{product.name || product.nombre}</span>
                                <span>${product.price || product.precio}</span>
                                <div>
                                    <button className="editButton">
                                        Editar
                                    </button>
                                    <button className="deleteButton">
                                        Eliminar
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </>
            )}

            <button onClick={() => setOpenForm(true)}>
                Agregar producto nuevo
            </button>

            {openForm && (
                <div
                    className={`form-sidebar-container ${
                        openForm ? "open" : ""
                    }`}
                >
                    <FormAddProducts onAgregar={agregarProducto} />
                    <button
                        onClick={() => setOpenForm(false)}
                        style={{ marginTop: "10px" }}
                    >
                        Cerrar Formulario
                    </button>
                </div>
            )}
            {openForm && (
                <div
                    className="overlay"
                    onClick={() => setOpenForm(false)}
                ></div>
            )}
        </div>
    );
};

export default Admin;
