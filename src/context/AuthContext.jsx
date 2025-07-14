import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // En el localStorage, ¿está autenticado?
        const localStorageAuthenticated =
            localStorage.getItem("isAuthenticated");

        // Retornamos true si el valor es "true", de lo contrario false, y asi inicializamos el estado
        // isAuthenticated.
        return localStorageAuthenticated === "true";
    });

    const [userName, setUserName] = useState(() => {
        // Hay un nombre de usuario en el local Storage?
        const localStorageUserName = localStorage.getItem("userName");
        return localStorageUserName || "";
    });

    const [userRole, setUserRole] = useState(() => {
        const localStorageUserRole = localStorage.getItem("userRole");
        return localStorageUserRole || null;
    });

    const loginUser = (name, role) => {
        setIsAuthenticated(true);
        setUserName(name);
        setUserRole(role);
    };

    const logoutUser = () => {
        setIsAuthenticated(false);
        setUserName("");
        setUserRole(null);
        //Borrar del Local Store las credenciales del usuario
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");
    };

    // Setear isAuthenticated en el local Storage cuando cambia
    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    // Setear userName en el local Storage cuando cambia
    useEffect(() => {
        if (userName) {
            localStorage.setItem("userName", userName);
        } else {
            localStorage.removeItem("userName");
        }
    }, [userName]);

    // Setear userRole en el local Storage cuando cambia
    useEffect(() => {
        if (userRole) {
            localStorage.setItem("userRole", userRole);
        } else {
            localStorage.removeItem("userRole");
        }
    }, [userRole]);

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                loginUser,
                logoutUser,
                userName,
                userRole,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
