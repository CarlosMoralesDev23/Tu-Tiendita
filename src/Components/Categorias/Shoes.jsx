import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";
import Header from "../Estatics/Header";
import Footer from "../Estatics/Footer";

const Shoes = () => {
    const { products } = useContext(ProductContext);
    const theShoes = products.filter((product) => product.type === "shoes");

    if (theShoes.length === 0) {
        return <p>No hay zapatos disponibles en este momento.</p>;
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
