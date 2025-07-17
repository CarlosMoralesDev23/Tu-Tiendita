import React, { useContext } from "react";
import "./Product.css";
import HeartEmpty from "../../assets/Generals/ImgCardProduct/HeartEmpty.svg";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import Stars from "../../Utils/Stars.JSX";


const Product = ({ product = {} }) => {
    const { addToCart } = useContext(CartContext);

    const isOutOfStock = product.stock <= 0;

    return (
        <div className={`tarjetaProducto ${isOutOfStock ? "agotado" : ""}`}>
            <div className="encabezado">
                <h3>{product.name}</h3>
                <img src={HeartEmpty} alt="corazon favorito" />
            </div>
            <div className="valoracion">
                <Stars rating={product.rating} />
            </div>
            <div className="contenedorImagen">
                <img src={product.image} alt={`Balon - ${product.name}`} />
            </div>
            <div className="contenedorPrecio">
                <span>
                    {typeof product.price === "number"
                        ? product.price.toFixed(2)
                        : product.price}
                    $
                </span>
            </div>

            <div className="contenedorStock">
                <span>
                    {isOutOfStock ? (
                        <span style={{ color: "red", fontWeight: "bold" }}>
                            Agotado
                        </span>
                    ) : (
                        `Disponibles: ${product.stock}`
                    )}
                </span>
            </div>

            <div className="contenedorAgregar">
                <button
                    onClick={() => addToCart(product)}
                    disabled={isOutOfStock}
                    className={isOutOfStock ? "disabled-button" : ""}
                >
                    Agregar
                </button>
            </div>

            <div className="contenedorVerMas">
                {isOutOfStock ? (
                    <span className="disabled-link-button">Ver Mas</span>
                ) : (
                    <Link to={`/products/${product.id}`}>Ver Mas</Link>
                )}
            </div>
        </div>
    );
};

export default Product;
