import React from "react";
import { Link } from "react-router-dom";
import ERROR404 from "../../../assets/Generals/ImgError/404-pagina.png"

const NotFound = () => {
    return (
        <div style={{display:"flex", flexDirection:"column", alignContent:"center", justifyContent:"center", alignItems:"center"}}>
            <h1 style={{color:"orange"}}>NotFound</h1>
            <img src={ERROR404} alt="IMAGEN-404" style={{width:"200px"}}/>
            <button>
                <Link to='/' />Volver al inicio
            </button>
        </div>
    );
};

export default NotFound;
