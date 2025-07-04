import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // Ver si esta logueado en localStorage, trae true o false
        const storedAuth = localStorage.getItem("isAuthenticated");
        // Retornamos e iniciamos isAuthenticated con la siguiente comparación
        return storedAuth === "true";
    });

    const [userName, setUserName] = useState(() => {
        // Hay un nombre de usuario en el local Storage?
        const storedUserName = localStorage.getItem("userName");
        return storedUserName || "";
    });

    const loginUser = (name) => {
        setIsAuthenticated(true);
        setUserName(name);
    };

    const logoutUser = () => {
        setIsAuthenticated(false);
        setUserName("");
        //Borrar del Local Store las credenciales del usuario
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userName");
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

    return (
        <AuthContext.Provider
            value={{
                isAuthenticated,
                setIsAuthenticated,
                loginUser,
                logoutUser,
                userName,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
