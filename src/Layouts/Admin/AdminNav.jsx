import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../../Styles/Admin/AdminNav.css";



import { CartContext } from "../../context/CartContext.jsx";


const AdminNav = () => {
        const { logoutUser } = useContext(CartContext)
    
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
