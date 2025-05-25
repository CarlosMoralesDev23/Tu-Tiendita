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

const Home = ({ products, loader, handleOpenCart, cart, addToCart, emptyCart }) => {
    return (
        <div>
            <Header />
            <Nav handleOpenCart={handleOpenCart} emptyCart={emptyCart} />

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
                            <Balls products={products} addToCart={addToCart} />
                        </div>

                        <div>
                            <TShirts
                                products={products}
                                addToCart={addToCart}
                            />
                        </div>

                        <div>
                            <Shoes products={products} addToCart={addToCart} />
                        </div>
                    </>
                )}
            </main>

            <Footer />
        </div>
    );
};

export default Home;
