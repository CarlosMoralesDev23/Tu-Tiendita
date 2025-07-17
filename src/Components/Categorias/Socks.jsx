import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header";
import Footer from "../Estatics/Footer";
import Loader from "../../Utils/Loader/Loader";
import NotFound from "../../Utils/NotFound";

const Socks = () => {
    const { products, loading, error } = useContext(ProductContext);

    const theSocks = products
        ? products.filter(
              (product) => product.type && product.type.toLowerCase() === "socks"
          )
        : [];

    if (error) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de medias</h1>
                <p style={{ color: "red", textAlign: "center", fontSize: "18px" }}>
                    Error al cargar medias.
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
                <h1>Bienvenido a la sección de medias</h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    if (theSocks.length === 0) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de medias</h1>
                <p style={{ textAlign: "center", fontSize: "18px" }}>
                    No hay medias disponibles en este momento.
                </p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>Bienvenido a la sección de medias</h1>
            <div className="medias">
                <div className="contenedorTarjetaBalones">
                    <ListProducts products={theSocks} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Socks;
