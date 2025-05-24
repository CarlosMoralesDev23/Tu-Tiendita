import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import Product from "../Components/ListProducts/Product";
import GuinoGuino from "../assets/Home/guinoguino.jpg";

const Home = () => {
    return (
        <div>
            <Header />
            <Nav />

            <main>
                <div className="welcome">
                    <h2>¡Me alegra verte por acá!</h2>
                    <p>Tenemos impresionantes productos para ti!!!</p>
                    <div>
                        <p>Date una vuelta por las ofertas "Guiño guiño"</p>
                        <img
                            src={GuinoGuino}
                            alt=""
                            style={{ width: "45px", borderRadius: "50%" }}
                        />
                    </div>
                </div>

                <div className="Balones">
                    <h2>Balones</h2>
                    <div className="contenedorTarjetaBalones">
                        <Product />
                    </div>
                </div>

                <div className="Remeras">
                    <h2>Remeras</h2>
                    <div className="contenedorTarjetaRemeras">
                        <Product />
                    </div>
                </div>

                <div className="Zapatos">
                    <h2>Zapatos</h2>
                    <div className="contenedorTarjetaZapatos">
                        <Product />
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
