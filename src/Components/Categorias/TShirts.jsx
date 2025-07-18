import React, { useContext } from "react";
import ListProducts from "../ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header/Header";
import Footer from "../Estatics/Footer/Footer";
import Loader from "../../Utils/Loader/Loader";
import NotFound from "../../Utils/NotFound"; // Asumo que también necesitas NotFound aquí

const TShirts = () => {
    const { products, loading, error } = useContext(ProductContext);
    
    const theTShirts = products ? ( products.filter((product)=> product.type && product.type.toLowerCase() === "tshirt") ) : []

    if (error) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Remeras</h1>
                <p style={{ color: "red", textAlign: "center" }}>
                    Error al cargar remeras: {error.message}
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
                <h1>Bienvenido a la sección de Remeras</h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    if (theTShirts.length === 0) {
        return (
            <div>
                <Header />
                <h1>Bienvenido a la sección de Remeras</h1>
                <p style={{ textAlign: "center" }}>
                    No hay remeras disponibles en este momento.
                </p>
                <Footer />
            </div>
        );
    }

    return (
        <div>
            <Header />
            <h1>Bienvenido a la sección de Remeras</h1>
            <div className="Remeras">
                <div className="contenedorTarjetaRemeras">
                    <ListProducts products={theTShirts} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default TShirts;
