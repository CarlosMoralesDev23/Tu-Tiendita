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

    const handleSubmit = async (e) => {
        e.preventDefault();

        //*Si loscampos estan vacios ejecutamos lo siguiente:

        let validationErrors = {};

        if (!email)
            validationErrors.email = "Email es requerido, no puede estar vacío";
        if (!password)
            validationErrors.password =
                "La contraseña es requerida, no puede estar vacía";

        if (Object.keys(validationErrors).length > 0) {
            //Object.keys(validationErrors): retorna un [] con todas las claves (nombres de propiedades),
            //Entonces si algun campo se envio vacío...
            setError(validationErrors);
            return;
        }

        //*Si los campos estan llenos ejecutamos los siguiente:

        setError({});
        //limpia error porque ya los campos no estan vacíos.

        // ********** TEMPORAL: BYPASS PARA ENTRAR RÁPIDO EN DESARROLLO **********
        if (email === "j" && password === "j") {
            loginUser("Dev Admin", "admin"); // O cualquier nombre que quieras ver
            navigate("/admin");
            return; // Detener la ejecución aquí
        }

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
                loginUser(foundUser.name, foundUser.role);

                if (foundUser.role === "admin") {
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
        navigate("/"); // Redirige a la ruta principal (Home), pero sin hacer login, sin autenticarte, sin ingresar a tu cuenta.
    };

    return (
        <div>
            <div className="login-container">
                //!SACAR EL noValidate en el form
                <p>SOLO POR AHORA PUEDES ENTAR CON j y j, como admin</p>
                <form className="login-form" onSubmit={handleSubmit} noValidate>
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
