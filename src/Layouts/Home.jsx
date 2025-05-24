import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import GuinoGuino from "../assets/Home/guinoguino.jpg";
import Balls from "../Components/Reutilizables/Categorias/Balls";
import TShirts from "../Components/Reutilizables/Categorias/TShirts";
import Shoes from "../Components/Reutilizables/Categorias/Shoes";
import "../Styles/Layouts/Home.css";
import Loader from "../Components/Reutilizables/Loader/Loader";

const Home = ({ products, loader }) => {
    return (
        <div>
            <Header />
            <Nav />

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
                        <div>
                            <button>Ver todo</button>
                            <Balls products={products} />
                        </div>

                        <div>
                            <button>Ver todo</button>
                            <TShirts products={products} />
                        </div>

                        <div>
                            <button>Ver todo</button>
                            <Shoes products={products} />
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Home;
