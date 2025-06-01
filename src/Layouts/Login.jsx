import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";
import "../styles/Layouts/Login.css";

const Login = () => {
    const { setIsAuthenticated } = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        let validationErrors = {};

        if (!email) validationErrors.email = "Email es requerido";
        if (!password) validationErrors.password = "La contraseña es requerida";

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        setError({});

        try {
            const res = await fetch("/data/user.json");

            if (!res.ok) throw new Error("No llego la respuesta");

            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setError({ email: "Credenciales inválidas" });
            } else {
                if (foundUser.role === "admin") {
                    setIsAuthenticated(true);
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.log("Error al obtener datos del json: ", error)
            setError({
                email: "Algo salió mal. Por favor, intentalo más tarde",
            });
        }
    };

    return (
        <div>
            <Header />
            <Nav />
            <div className="login-container">
                <form className="login-form" onSubmit={handleSubmit}>
                    <h2>Iniciar sesión</h2>

                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        autoComplete="email"
                    />
                    <div className="error">{error.email || " "}</div>

                    <input
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        autoComplete="current-password"
                    />
                    <div className="error">{error.password || " "}</div>

                    <button type="submit">Entrar</button>
                </form>
            </div>
            <Footer />
        </div>
    );
};

export default Login;
