import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "../styles/LayoutsCSS/Login.css";

const Login = () => {
    const { loginUser } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const toDoValidateFormFields = () => {
        let validationErrors = {};
        if (!email) validationErrors.email = "Email es requerido";
        if (!password) validationErrors.password = "La contraseña es requerida";

        setError(validationErrors);
        return Object.keys(validationErrors).length === 0;
    };

    const toDoBypass = () => {
        if (email === "j" && password === "j") {
            loginUser("Dev Admin", "admin"); 
            navigate("/admin");
            return true;
        }

        if (email === "k" && password === "k") {
            loginUser("Dev cliente", "client");
            navigate("/");
            return true;
        }
        return false;
    };

    const toDoAuthentication = async () => {
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
                loginUser(foundUser.name, foundUser.role);
                //* -------------- Si los datos son validos, """""""loginUser"""""".------------------------------
                //* -------------- Si los datos son validos, """""""loginUser"""""".------------------------------
                //* -------------- Si los datos son validos, """""""loginUser"""""".------------------------------

                if (foundUser.role === "admin") {
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.log("No se obtuvo el JSON: ", error);
            setError({
                email: "Problema al cargar datos. Por favor, intenta de nuevo más tarde.",
            });
        }
    };

    const toDoLogin = async (e) => {
        e.preventDefault();
        //no recarga la pagina y permite hacer validaciones

        setError({}); // Limpiar errores previos

        //*Si los campos estan vacios ejecutamos lo siguiente:
        if (!toDoValidateFormFields()) {
            return; // Si la validación falla, detener la ejecución.
        }

        // ********** TEMPORAL: BYPASS PARA ENTRAR RÁPIDO EN DESARROLLO **********
        if (toDoBypass()) {
            return; // Si el bypass se ejecutó, detener la función.
        }

        await toDoAuthentication(); // Ejecutar la lógica de autenticación real
    };

    const dontHaveAccount = () => {
        navigate("/");
    };

    return (
        <div>
            <div className="login-container">
                <form className="login-form" onSubmit={toDoLogin} noValidate>
                    <h2>Iniciar sesión</h2>

                    <div>
                        <label htmlFor="">Email:</label>
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            autoComplete="email"
                        />
                        <div className="error">{error.email || " "}</div>
                    </div>

                    <div>
                        <label htmlFor="">Contraseña:</label>
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            autoComplete="current-password"
                        />
                        <div className="error">{error.password || " "}</div>
                    </div>

                    <button type="submit">Entrar</button>
                </form>
            </div>
            <button onClick={() => dontHaveAccount()}>
                No estoy registrado, ir al Home.
            </button>
        </div>
    );
};

export default Login;
