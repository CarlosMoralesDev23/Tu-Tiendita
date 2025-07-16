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
        // Retorna true si no hay errores, false si hay
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
            //Pide el archivo user.json.

            if (!res.ok) throw new Error("No llego la respuesta");
            // res.ok Es una propiedad booleana del objeto 'Response'. true si la respuesta HTTP es del rango 200-299.
            // Si no fue true, 'Error'. En consola.
            // y va inmediatamente al bloque `catch`.

            const users = await res.json();
            //El JSON se convierte en un array de objetos

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            ); // Busca un usuario que coincida con el email y la contraseña.

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
        navigate("/"); // Redirige a la ruta principal (Home), pero sin autenticarte.
    };

    return (
        <div>
            <div className="login-container">
                {/* !SACAR EL noValidate en el form */}
                <p>SOLO POR AHORA PUEDES ENTAR CON j y j, como admin</p>
                <form className="login-form" onSubmit={toDoLogin} noValidate>
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
            <button onClick={() => dontHaveAccount()}>
                No estoy registrado, ir al Home.
            </button>
        </div>
    );
};

export default Login;
