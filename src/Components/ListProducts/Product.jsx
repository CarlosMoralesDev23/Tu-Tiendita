import React from "react";
import "../../Styles/ListProducts/Product.css";
import HeartEmpty from "../../assets/Product/heartEmpty.svg";
import StarEmpty from "../../assets/Product/starEmpty.svg";

const Product = ({ producto }) => {
    return (
        <div className="tarjetaProducto">
            <div className="encabezado">
                <h3>{producto.name}</h3>
                <img src={HeartEmpty} alt="corazon favorito" />
            </div>

            <div className="valoracion">
                <img src={StarEmpty} alt="" />
                <img src={StarEmpty} alt="" />
                <img src={StarEmpty} alt="" />
                <img src={StarEmpty} alt="" />
                <img src={StarEmpty} alt="" />
            </div>

            <div className="contenedorImagen">
                <img src={producto.image} alt="balon" />
            </div>

            <div className="contenedorPrecio">
                <span>{producto.price} $</span>
            </div>

            <div className="contenedorStock">
                <span>Disponibles: {producto.stock}</span>
            </div>

            <div className="contenedorAgregar">
                <button>Agregar</button>
            </div>

            <div className="contenedorAgregarCantidades">
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
