import { Link, useNavigate } from "react-router-dom";
import React, { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";


const OptionLogin = () => {

    const { logoutUser, isAuthenticated, userName } = useContext(AuthContext);
    const navigate = useNavigate();

    return (
        <li className="nav-item  username-logout">
            {isAuthenticated ? (
                <>
                    <span>{userName || "User"}</span>
                    <button className="admin-logout" onClick={logoutUser}>
                        <Link to="/">
                            <i className="fa-solid fa-right-from-bracket"></i>
                        </Link>
                    </button>
                </>
            ) : (
                <Link to="/Login">Login</Link>
            )}
        </li>
    );
};

export default OptionLogin;
