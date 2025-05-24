import React from "react";
import "../../Styles/ListProducts/Product.css";
import HeartEmpty from  "../../assets/Product/heartEmpty.svg"
import StarEmpty from  "../../assets/Product/starEmpty.svg"
import balonAdidas from "../../assets/Balones/AdidasAlRihlaWorldCupTraining.webp";


const Product = () => {
    return (
        <div className="tarjetaProducto">
            <div className="encabezado">
                <div>
                    <div className="nombre">
                        <h3>Nombre</h3>
                    </div>

                    <div className="valoracion">
                        <div>
                            <img src={StarEmpty} alt="" />
                            <img src={StarEmpty} alt="" />
                            <img src={StarEmpty} alt="" />
                            <img src={StarEmpty} alt="" />
                            <img src={StarEmpty} alt="" />
                        </div>
                    </div>
                </div>

                <div className="favorito">
                    <img src={HeartEmpty} alt="corazon favorito" />
                </div>
            </div>

            <div className="contenedorImagen">
                <img
                    src={balonAdidas}
                    alt="balon"
                />
            </div>

            <div className="contenedorPrecio">
                <span>100 $</span>
            </div>

            <div className="contenedorAgregar">
                <button>Agregar</button>
            </div>

            <div className="contenedorAgregarCantidades">
                <div>
                    <button>-</button>
                    <span>Quantity</span>
                    <button>+</button>
                </div>
            </div>
        </div>
    );
};

export default Product;
