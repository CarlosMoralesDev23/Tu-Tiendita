import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

import OpcionCategorias from "./OpcionCategorias";

import "../Estatics/Statics.css";

const Header = () => {
    const { toDoOpenCart, itemCount } = useContext(CartContext);

    const { logoutUser, isAuthenticated, userName } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <header className="header">
            <h1 className="header-title">Tu Tiendita Sport</h1>

            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">
                        <Link to="/">Home</Link>
                    </li>

                    <OpcionCategorias />

                    <li className="nav-item">
                        <a href="#footer" className="nav-link">
                            Contacto
                        </a>
                    </li>

                    <button
                        className="nav-cart-button"
                        onClick={() => toDoOpenCart()}
                    >
                        <i className="fa-solid fa-cart-shopping"></i>
                        {itemCount > 0 && (
                            <span className="cart-item-count">{itemCount}</span>
                        )}
                    </button>

                    <li className="nav-item  username-logout">
                        {isAuthenticated ? (
                            <>
                                <Link to="/MyCount">{userName || "User"}</Link>
                                <button
                                    className="admin-logout"
                                    onClick={logoutUser}
                                >
                                    <Link to="/">
                                        <i className="fa-solid fa-right-from-bracket"></i>
                                    </Link>
                                </button>
                            </>
                        ) : (
                            <Link to="/Login">Login</Link>
                        )}
                    </li>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
