import React from "react";
import Header from "../../Fijos/Header/Header";
import Nav from "../../Fijos/Nav/Nav";
import Product from "../../ListProducts/Product";
import Footer from "../../Fijos/Footer/Footer";

const Cart = () => {
    return (
        <div>
            <Header/>
            <Nav/>
            <h2>Cart</h2>
            <Product/>
            <Footer/>
        </div>
    );
};

export default Cart;
