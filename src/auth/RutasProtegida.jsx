import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const RutasProtegida = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //* Si esta autenticado va a Administrador,  sino permanece o vuelve  a login

    return children;
};

export default RutasProtegida;