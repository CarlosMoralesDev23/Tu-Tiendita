import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import GuinoGuino from "../assets/ImgHome/guinoguino.jpg";
import Balls from "../Components/Reusables/Categorias/Balls";
import TShirts from "../Components/Reusables/Categorias/TShirts";
import Shoes from "../Components/Reusables/Categorias/Shoes";
import "../Styles/Layouts/Home.css";
import Loader from "../Components/Reusables/Loader/Loader";

const Home = ({ products, loader, handleOpenCart }) => {
    return (
        <div>
            <Header />
            <Nav handleOpenCart={handleOpenCart} />

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
