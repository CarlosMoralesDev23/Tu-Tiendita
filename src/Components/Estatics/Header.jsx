import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { Link, useNavigate } from "react-router-dom";

import OpcionCategorias from "./OpcionCategorias";

import "../Estatics/Statics.css";

const Header = () => {
    const { handleOpenCart, isAuthenticated, userName, itemCount } =
        useContext(CartContext);


    return (
        <header className="header">
            <h1 className="header-title">Tu Tiendita Sport</h1>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/MyCount">GPS</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>


                    <OpcionCategorias />


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
                        <i className="fa-solid fa-cart-shopping"></i>
                        {itemCount > 0 && (
                            <span className="cart-item-count">{itemCount}</span>
                        )}
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
