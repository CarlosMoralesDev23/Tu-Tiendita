import React from "react";
import { Link } from 'react-router-dom'

import "../../../Styles/Fijos/Nav.css";

const Nav = () => {
    return (
        <nav className="main-nav">
            <ul className="nav-list">
                <li className="nav-item"><Link to='/MiCuenta'  ></Link>GPS</li>
                <li className="nav-item"><Link to='/'      ></Link>Home</li>
                <li className="nav-item"><Link to='/Categorias'></Link>Categorias</li>
                <li className="nav-item"><Link to='/Ofertas'   ></Link>Ofertas</li>
                <li className="nav-item"><Link to='/Registrate'></Link>Registrate</li>
                <li className="nav-item"><Link to='/Login'     ></Link>Login</li>
                <li className="nav-item"><Link to='/Cart'      ></Link>Cart</li>
            </ul>
        </nav>
    );
};

export default Nav;
