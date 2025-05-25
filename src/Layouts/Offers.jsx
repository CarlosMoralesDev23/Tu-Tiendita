import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";

const Offers = ({
    products,
    loader,
    handleOpenCart,
    cart,
    addToCart,
    emptyCart,
}) => {
    return (
        <div>
            <Header />
            <Nav handleOpenCart={handleOpenCart} />
            <h2>Ofertas</h2>
            <h3>EN DESARROLLO</h3>

            <Footer />
        </div>
    );
};

export default Offers;
