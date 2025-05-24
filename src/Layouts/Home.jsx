import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import GuinoGuino from "../assets/Home/guinoguino.jpg";
import Balones from "../Components/Reutilizables/Categorias/Balones";
import Remeras from "../Components/Reutilizables/Categorias/Remeras";
import Zapatos from "../Components/Reutilizables/Categorias/Zapatos";
import "../Styles/Layouts/Home.css";

const Home = ({ productos, loader }) => {
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

                <div>
                    <button>Ver todo</button>
                    <Balones productos={productos} />
                </div>

                <div>
                    <button>Ver todo</button>
                    <Remeras productos={productos} />
                </div>

                <div>
                    <button>Ver todo</button>
                    <Zapatos productos={productos} />
                </div>
            </main>

            <Footer />
        </div>
    );
};

export default Home;
