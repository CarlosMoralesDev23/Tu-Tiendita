import React, { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { useNavigate } from "react-router-dom";
import "../styles/Layouts/Login.css";

const Login = () => {
    const { setIsAuthenticated, loginUser } = useContext(CartContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState({});
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        //*Si loscampos estan vacios ejecutamos lo siguiente:

        let validationErrors = {};

        if (!email) validationErrors.email = "Email es requerido";
        if (!password) validationErrors.password = "La contraseña es requerida";

        if (Object.keys(validationErrors).length > 0) {
            //Object.keys(validationErrors): Devuelve un array con todas las claves (nombres de propiedades)
            setError(validationErrors);
            return;
        }


        //*Si los campos estan llenos ejecutamos los siguiente:

        setError({});
        //limpia error  porque ya los campos no estan vacíos.


        try {
            const res = await fetch("/data/user.json");

            if (!res.ok) throw new Error("No llego la respuesta");
            // res.ok   Es una propiedad booleana del objeto 'Response'. Es `true` si la respuesta HTTP
            //tiene un código de estado en el rango 200-299 (éxito), y `false` en otro caso (ej. 404 Not Found, 500 Server Error).

            // Si la respuesta no fue exitosa (`!res.ok`), lanzamos un nuevo objeto 'Error'.
            // Cuando se lanza un error aquí, la ejecución salta inmediatamente al bloque `catch`.

            const users = await res.json();
            //Se convierte en un array de objetos

            const foundUser = users.find(
                (user) => user.email === email && user.password === password
            );

            if (!foundUser) {
                setError({ email: "Credenciales inválidas" });
            } else {

                loginUser(foundUser.name)

                if (foundUser.role === "admin") {
                    setIsAuthenticated(true);
                    navigate("/admin");
                } else {
                    navigate("/");
                }
            }
        } catch (error) {
            console.log("Error al obtener datos del json: ", error);
            setError({
                email: "Algo salió mal. Por favor, intentalo más tarde",
            });
        }
    };

    const dontHaveAccount = () => {
        navigate("/"); // Redirige a la ruta principal (Home)
    };

    return (
        <div>



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

            <button onClick={()=>dontHaveAccount()}>No tengo cuenta</button>

        </div>
    );
};

export default Login;
