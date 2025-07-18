import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header/Header";
import Footer from "../Estatics/Footer/Footer";
import Loader from "../../Utils/Loader/Loader";
import NotFound from "../../Utils/NotFound";

const Balls = () => {
    const { products, loading, error } = useContext(ProductContext);

    const theBalls = products
        ? products.filter(
              (product) => product.type && product.type.toLowerCase() === "ball"
          )
        : [];

    if (error) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Balones</h1>
                <p style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
                    Error al cargar balones.
                </p>
                <NotFound />
                <Footer />
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Balones</h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    if (theBalls.length === 0) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Balones</h1>
                <p style={{ textAlign: "center" }}>
                    No hay balones disponibles en este momento.
                </p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>Bienvenido a la sección de Balones</h1>
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
