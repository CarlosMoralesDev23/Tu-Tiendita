import React from "react";
import "../../Styles/ListProducts/Product.css";
import HeartEmpty from "../../assets/ImgCardProduct/HeartEmpty.svg";
import StarEmpty from "../../assets/ImgCardProduct/StarEmpty.svg";

const Product = ({ product, addToCart }) => {


    
    return (
        <div className="tarjetaProducto">
            
            <div className="encabezado">
                <h3>{product.name}</h3>
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
                <img src={product.image} alt="balon" />
            </div>

            <div className="contenedorPrecio">
                <span>{product.price} $</span>
            </div>

            <div className="contenedorStock">
                <span>Disponibles: {product.stock}</span>
            </div>

            <div className="contenedorAgregar">
                <button onClick={()=>addToCart(product)} >Agregar</button>
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
