import React from "react";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import Product from "../Components/ListProducts/Product";

const Home = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <Product/>
            <Footer/>
        </div>
    );
};

export default Home;
