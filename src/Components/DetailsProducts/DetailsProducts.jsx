import React, {useContext} from "react";
import { useParams, Link } from "react-router-dom"; 
import Header from "../Fijos/Header/Header";
import Nav from "../Fijos/Nav/Nav";
import Footer from "../Fijos/Footer/Footer";
import { CartContext } from "../../context/CartContext";
import HeartEmpty from "../../assets/Generals/ImgCardProduct/HeartEmpty.svg"
import StarEmpty from "../../assets/Generals/ImgCardProduct/StarEmpty.svg";


const DetailsProducts = ( ) => {
    const { id } = useParams();

    const {products} = useContext(CartContext)

    const product = products.find((Product) => Product.id == id);

    return (
        <div>
            <Header />
            <Nav />

            <h1>Detalle del producto: {id}</h1>

            {product ? (
                <>
                    <h2>{product.name}</h2>

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
                            <button onClick={() => addToCart(product)}>
                                Agregar
                            </button>
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
                </>
            ) : (
                <p>Producto no encontrado</p>
            )}

            <Footer />
        </div>
    );
};

export default DetailsProducts;
