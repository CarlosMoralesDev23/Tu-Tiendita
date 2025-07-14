import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext.jsx";

const ProtectedRoute = ({ children, requiredRole = null }) => {
    const { isAuthenticated, userRole } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }

    if (requiredRole && userRole !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children;
};

export default ProtectedRoute;



//* Si esta autenticado va a Administrador,  sino permanece o vuelve  a login
//* Interactúa principalmente con AuthContext
//* Recibe de AuthContext el valor de "isAuthenticated". Que sera un booleano.
//* Si el "false" redirige a la ruta de login.
