import React from "react";
import { Link } from "react-router-dom";

import "../../../Styles/Fijos/Nav.css";

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item">
                    <Link to="/MiCuenta">GPS</Link>
                </li>
                <li className="nav-item">
                    <Link to="/">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Categorias">Categorias</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Ofertas">Ofertas</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Registrate">Registrate</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link to="/Cart">Cart</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
