import React, {useContext} from "react";
import "./Product.css";
import HeartEmpty from "../../assets/Generals/ImgCardProduct/HeartEmpty.svg";
import StarEmpty from "../../assets/Generals/ImgCardProduct/StarEmpty.svg";

import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Product = ({ product = [] }) => {

    const {addToCart} = useContext(CartContext)

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

            {/* <div className="contenedorAgregarCantidades">
                <div>
                    <button>-</button>
                    <span>0</span>
                    <button>+</button>
                </div>
            </div> */}

            <div>
                <Link to={`/products/${product.id}`}>Ver Mas</Link>
            </div>
        </div>
    );
};

export default Product;
