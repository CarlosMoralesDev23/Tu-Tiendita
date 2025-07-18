import React from "react";

import "../EstaticsCSS/Statics.css";
import OptionHome from "./OptionHome";
import OptionCategorias from "../Header/OptionCategories/OpcionCategorias";
import OptionContact from "./OptionContact";
import OptionCart from "./OptionCart";
import OptionLogin from "./OptionLogin";

const Header = () => {

    return (
        <header className="header">
            <h1 className="header-title">Tu Tiendita Sport</h1>

            <nav className="nav">
                <ul className="nav-list">

                    <OptionHome/>

                    <OptionCategorias />

                    <OptionContact/>

                    <OptionCart/>

                    <OptionLogin/>

                </ul>
            </nav>
        </header>
    );
};

export default Header;
