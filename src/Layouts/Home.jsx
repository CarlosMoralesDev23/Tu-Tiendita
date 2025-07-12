import React, { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

// Importa Header y Footer aquí si quieres que solo aparezcan en Home
import Header from "../Components/Estatics/Header";
import Footer from "../Components/Estatics/Footer";

import GuinoGuino from "../assets/Generals/ImgHome/guinoguino.jpg";
import ListProducts from "../Components/ListProducts/ListProducts";

import "../Styles/LayoutsCSS/Home.css";

import Loader from "../Utils/Loader/Loader.jsx";
import NotFound from "../Utils/NotFound.jsx";

const Home = () => {
    const { products, loading, error } = useContext(ProductContext);

    let productsToShow = [];
    if (products && products.length > 0) {
        const shuffledProducts = [...products];
        shuffledProducts.sort(() => Math.random() - 0.5);
        productsToShow = shuffledProducts.slice(0, 10);
    }

    return (
        <div>
            <Header />

            {error ? (
                <NotFound />
            ) : loading ? (
                <Loader />
            ) : (
                <main>
                    <div className="welcome">
                        <h2>¡Me alegra verte por acá!</h2>
                        <p>Tenemos impresionantes productos para ti!!!</p>
                        <div>
                            <p>
                                Registrate y date una vuelta por la sección de
                                ofertas
                            </p>
                            <img
                                src={GuinoGuino}
                                alt=""
                                style={{ width: "45px", borderRadius: "50%" }}
                            />
                        </div>
                    </div>

                    <section className="featured-products">
                        {productsToShow.length > 0 ? (
                            <ListProducts products={productsToShow} />
                        ) : (
                            <p>No se encontraron productos destacados.</p>
                        )}
                    </section>
                </main>
            )}

            <Footer />
        </div>
    );
};

export default Home;
