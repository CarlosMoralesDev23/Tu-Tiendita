import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";

import { Link } from "react-router-dom";

import "../../../Styles/Fijos/Nav.css";

const Nav = () => {
    const { handleOpenCart, isAuthenticated, userName } =
        useContext(CartContext);

    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/MyCount">GPS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Categories">Categorias</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Offers">Ofertas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Register">Registrate</Link>
                </li>
                <li className="nav-item">
                    {isAuthenticated ? (
                        <Link to="/MyCount">{userName || "User"}</Link>
                    ) : (
                        <Link to="/Login">Login</Link>
                    )}
                </li>
                <button
                    className="nav-cart-button"
                    onClick={() => handleOpenCart()}
                >
                    <i className="fa-solid fa-cart-shopping"></i>{" "}
                </button>
            </ul>
        </nav>
    );
};

export default Nav;
