import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import Header from "../Components/Fijos/Header/Header";
import Nav from "../Components/Fijos/Nav/Nav";
import Footer from "../Components/Fijos/Footer/Footer";

const Login = () => {
    const { setIsAuthenticated } = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //objeto vacio para guardar mensaje de error si se envian campos vacios
        let validationErrors = {};

        //Si el campo email se envia vacio, se setea un mensaje en error
        if (!email) {
            validationErrors.email = "Email es requerido";
        }

        //Si el campo password se envia vacio, se setea un mensaje en error
        if (!password) {
            validationErrors.password = "La contraseña es requerida";
        }

        if (Object.keys(validationErrors).length > 0) {
            setError(validationErrors);
            return;
        }

        // si hubo errores , pero se corriegieron y ya hay datos a validar entonces...
        setError({});

        try {
            const res = await fetch("data/users.json");

            if (!res.ok) {
                throw new Error("No llego la respuesta");
            }

            const users = await res.json();

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setError({ email: "Credenciales invalidas" });
            } else {
                if (foundUser.role === "admin") {
                    setIsAuthenticated(true);
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            setError({
                email: "Algo salio mal. Por favor, intentalo mas tarde",
            });
        }
    };

    return (
        <div>
            <Header />
            <Nav />

            <div style={{ padding: "2rem" }}>
                <h2>Login</h2>

                <form
                    onSubmit={() => handleSubmit()}
                    style={{ maxWidth: "400px" }}
                >
                    <div style={{ marginBottom: "1rem" }}>
                        <label>Email</label>
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{ width: "100%" }}
                        />

                        {error.email && (
                            <p style={{ color: "red", margin: 0 }}>
                                {error.email}
                            </p>
                        )}
                    </div>

                    <div style={{ marginBottom: "1rem" }}>
                        <label>Contraseña</label>
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{ width: "100%" }}
                        />
                    </div>

                    {error.password && (
                        <p style={{ color: "red", margin: 0 }}>
                            {error.password}
                        </p>
                    )}

                    <button type="submit">Iniciar sesión</button>
                </form>
            </div>

            <Footer />
        </div>
    );
};

export default Login;
