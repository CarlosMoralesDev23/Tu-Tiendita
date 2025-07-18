import { createContext, useState, useEffect } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {


    const [isAuthenticated, setIsAuthenticated] = useState(() => {
        const localStorageAuthenticated =
            localStorage.getItem("isAuthenticated");
        return localStorageAuthenticated === "true";

        // *Se envia al local Storage y lo recibe el ProtectedRoute.jsx
    });


    const [userName, setUserName] = useState(() => {
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
        localStorage.removeItem("isAuthenticated");
        localStorage.removeItem("userName");
        localStorage.removeItem("userRole");
    };


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
                isAuthenticated,
                userRole,          
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
