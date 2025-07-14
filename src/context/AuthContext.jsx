import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        // En el localStorage, ¿está autenticado?
        const localStorageAuthenticated =
            localStorage.getItem("isAuthenticated");

        // Retornamos true si el valor es "true" porque estuviese logueado, de lo contrario false, y asi inicializamos el estado
        // isAuthenticated.
        // Acá es "true" porque el valor en el localStorage es un string, y no un booleano.
        return localStorageAuthenticated === "true";

        // *Se envia al local Storage y lo recibe el ProtectedRoute.jsx
    });


    const [userName, setUserName] = useState(() => {
        // Hay un nombre de usuario en el local Storage?
        const localStorageUserName = localStorage.getItem("userName");
        return localStorageUserName || "";

        // Actualmente no se usa, en el frontend pero se puede usar en el componente Header.jsx
    });


    const [userRole, setUserRole] = useState(() => {
        // Hay un rol de usuario en el local Storage?
        const localStorageUserRole = localStorage.getItem("userRole");
        return localStorageUserRole || null;

        //* se envia al local Storage y lo recibe el ProtectedRoute.jsx
    });


    const loginUser = (name, role) => {
        // Guardar en el Local Store name y role
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


    //* Setear los valores en el localStorage cuando cambian mediante loginUser y logoutUser
    useEffect(() => {
        localStorage.setItem("isAuthenticated", isAuthenticated);
    }, [isAuthenticated]);

    useEffect(() => {
        if (userName) {
            localStorage.setItem("userName", userName);
        } else {
            localStorage.removeItem("userName");
        }
    }, [userName]);

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
                isAuthenticated,   //*Recibe protectedRoute.jsx
                userRole,          //*Recibe protectedRoute.jsx
                setIsAuthenticated, 
                loginUser,        //*Recibe Login.jsx
                logoutUser,
                userName,      
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};
