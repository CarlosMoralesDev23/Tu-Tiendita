import React, { useContext } from "react";
import ListProducts from "../ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header";
import Footer from "../Estatics/Footer";

const TShirts = () => {

    <Header />

    const { products } = useContext(ProductContext);
    const theTShirts = products.filter((product) => product.type === "tshirt");

    if (theTShirts.length === 0) {
        return <p>No hay remeras disponibles en este momento.</p>;
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
