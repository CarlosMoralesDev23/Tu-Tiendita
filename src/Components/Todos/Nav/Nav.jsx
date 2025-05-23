import React from "react";
import "../../../Styles/Todos/Nav.css";

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item">Posición</li>
                <li className="nav-item">Home</li>
                <li className="nav-item">Categorias</li>
                <li className="nav-item">Ofertas</li>
                <li className="nav-item">Registrate</li>
                <li className="nav-item">Login</li>
            </ul>
        </nav>
    );
};

export default Nav;
