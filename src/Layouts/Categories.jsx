import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";

const Categories = ({ handleOpenCart }) => {
    return (
        <div>
            <Header />
            <Nav handleOpenCart={handleOpenCart} />
            <h2>Categorias</h2>
            <h3>EN DESARROLLO</h3>
            <Footer />
        </div>
    );
};

export default Categories
