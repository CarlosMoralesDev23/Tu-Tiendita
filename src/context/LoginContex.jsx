import React from "react";

export const LoginContext = createContext();

const LoginProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userName, setUserName] = useState("");

    const loginUser = (name) => {
        setUserName(name);
        setIsAuthenticated(true);
    };

    const logoutUser = () => {
        setUserName("");
        setIsAuthenticated(false);
    };

    return <div></div>;
};

export default LoginContex;
