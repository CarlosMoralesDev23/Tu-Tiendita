import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { CartContext } from "../context/CartContext.jsx";

const RutasProtegida = ({ children }) => {
    const { isAuthenticated } = useContext(CartContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    //* Si esta autenticado va a Administrador,  sino permanece o vuelve  a login
    
    
    return children;
};

export default RutasProtegida;