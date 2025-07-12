import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header";
import Footer from "../Estatics/Footer";

const Balls = () => {
    const { products, loading, error } = useContext(ProductContext);

    const theBalls = products
        ? products.filter(
            (product) => product.type && product.type.toLowerCase() === "ball"
          )
        : [];

    if (loading) {
        return <p>Cargando balones...</p>;
    }

    if (error) {
        return <p>Error al cargar balones: {error.message}</p>;
    }

    if (theBalls.length === 0) {
        return <p>No hay balones disponibles en este momento.</p>;
    }

    return (
        <div>
            <Header />
            <h1>Bienvenido a la sección de Balones</h1>
            <p>Explora nuestra variedad de balones de fútbol, baloncesto y más</p>
            <div className="Balones">
                <div className="contenedorTarjetaBalones">
                    <ListProducts products={theBalls} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Balls;
