import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";
import { ProductContext } from "../context/ProductContext";


import Header from "../Components/Estatics/Header";
import Footer from "../Components/Estatics/Footer";
import GuinoGuino from "../assets/Generals/ImgHome/guinoguino.jpg";
import Balls from "../Components/Categorias/Balls.jsx";
import TShirts from "../Components/Categorias/TShirts";
import Shoes from "../Components/Categorias/Shoes";

import "../Styles/LayoutsCSS/Home.css";

import Loader from "../Utils/Loader/Loader.jsx";
import NotFound from "../Utils/NotFound.jsx";


const Home = () => {
    const { loader, error } = useContext(CartContext);
    const { productos } = useContext(ProductContext);

    return (
        <div>
            <Header />

            {error ? (
                <NotFound />
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

                    {loader ? (
                        <Loader />
                    ) : (
                        <>
                            <Balls />

                            <TShirts />

                            <Shoes />
                        </>
                    )}
                </main>
            )}

            <Footer />
        </div>
    );
};

export default Home;
