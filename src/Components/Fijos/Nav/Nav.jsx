import React, {useContext} from "react";
import { CartContext } from "../../../context/CartContext";

import { Link } from "react-router-dom";

import "../../../Styles/Fijos/Nav.css";
import ImageCart from "../../../assets/ImgNav/CarritoComprasAzul.png";


const Nav = ( ) => {

    const {handleOpenCart} = useContext(CartContext)

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
                    <Link to="/Login">Login</Link>
                </li>
                <button className="nav-cart-button" onClick={()=>handleOpenCart()}>
                    <img src={ImageCart} alt="abrir carrito de compras" />
                </button>
            </ul>
        </nav>
    );
};

export default Nav;
