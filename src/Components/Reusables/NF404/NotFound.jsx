import React from "react";
import { Link } from "react-router-dom";
import ERROR404 from "../../../assets/ImgError/404-pagina.png"

const NotFound = () => {
    return (
        <div>
            <h1>NotFound</h1>
            <img src={ERROR404} alt="IMAGEN-404" />
            <button>
                <Link to='/' />Volver al inicio
            </button>
        </div>
    );
};

export default NotFound;
