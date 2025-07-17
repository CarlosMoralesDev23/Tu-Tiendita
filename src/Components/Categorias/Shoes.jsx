import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header";
import Footer from "../Estatics/Footer";
import Loader from "../../Utils/Loader/Loader";
import NotFound from "../../Utils/NotFound"; // Asumo que también necesitas NotFound aquí

const Shoes = () => {
    const { products, loading, error } = useContext(ProductContext);

    const theShoes = products ? products.filter((product) => product.type && product.type.toLowerCase() === "shoes" ) : [];

    if (error) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Zapatos</h1>
                <p
                    style={{
                        color: "red",
                        textAlign: "center",
                        fontSize: "18px",
                    }}
                >
                    Error al cargar zapatos.
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
                <h1>Bienvenido a la sección de Zapatos</h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    if (theShoes.length === 0) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Zapatos</h1>
                <p style={{ textAlign: "center" }}>
                    No hay zapatos disponibles en este momento.
                </p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>Bienvenido a la sección de Zapatos</h1>
            <div className="Zapatos">
                <div className="contenedorTarjetaZapatos">
                    <ListProducts products={theShoes} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Shoes;
