import React, { useContext } from "react";
import { CartContext } from "../context/CartContext.jsx";

import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import GuinoGuino from "../assets/Generals/ImgHome/guinoguino.jpg";
import Balls from "../Components/Reusables/Categorias/Balls";
import TShirts from "../Components/Reusables/Categorias/TShirts";
import Shoes from "../Components/Reusables/Categorias/Shoes";
import "../Styles/Layouts/Home.css";
import Loader from "../Components/Reusables/Loader/Loader";
import NotFound from "../Components/Reusables/NF404/NotFound.jsx";

const Home = () => {
    const { loader, error } = useContext(CartContext);

    return (
        <div>
            <Header />
            <Nav />

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
