import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./AdminCSS/AdminNav.css";

import { AuthContext } from "../../context/AuthContext.jsx";

const AdminNav = () => {
    const { logoutUser } = useContext(AuthContext);

    return (
        <nav className="admin-nav">
            <ul>
                <li>
                    <h2>Administrador</h2>
                </li>

                <li>
                    <button className="admin-logout" onClick={logoutUser}>
                        <Link to="/login">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </button>
                </li>
            </ul>
        </nav>
    );
};

export default AdminNav;
