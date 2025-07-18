import React, { useContext } from "react";

import { CartContext } from "../../context/CartContext";
import { ProductContext } from "../../context/ProductContext";
import { useParams, Link } from "react-router-dom";

import "./DetailsProducts.css";

import Header from "../Estatics/Header/Header";
import Footer from "../Estatics/Footer/Footer";
import Loader from "../../Utils/Loader/Loader";
import NotFound from "../../Utils/NotFound";
import Stars from "../../Utils/Stars";
import Product from "../ListProducts/Product";

const DetailsProducts = () => {
    const { id } = useParams();

    const { products, loading, error } = useContext(ProductContext);
    const { addToCart } = useContext(CartContext);

    const product = products.find((prod) => prod.id === id);

    if (error) {
        return (
            <div>
                <Header />
                <h1 className="detail-product-title">Detalle del Producto</h1>
                <p className="detail-error-message">
                    Error al cargar los productos: {error}
                </p>
                <NotFound />
                <Footer />
            </div>
        );
    }

    if (loading) {
        return (
            <div>
                <Header />
                <h1 className="detail-product-title">
                    Cargando detalle del producto...
                </h1>
                <Loader />
                <Footer />
            </div>
        );
    }

    if (!product) {
        return (
            <div>
                <Header />
                <h1 className="detail-product-title">Producto no encontrado</h1>
                <p className="detail-not-found-message">
                    Lo sentimos, el producto con ID "{id}" no existe.
                </p>
                <NotFound />
                <Footer />
            </div>
        );
    }

    const relatedProducts = products.filter(
        (p) => p.type === product.type && p.id !== product.id
    );

    const productsToShow = relatedProducts
        .sort(() => Math.random() - 0.5)
        .slice(0, 5);

    return (
        <div>
            <Header />
            <h1 className="detail-product-title">{product.name}</h1>

            <div className="product-detail-container">
                <div className="product-image-section">
                    <img
                        src={product.image}
                        alt={product.name}
                        className="product-main-image"
                    />
                </div>

                <div className="product-info-section">
                    <div className="product-rating">
                        <Stars rating={product.rating} />
                    </div>

                    <div className="product-price">
                        <span>{product.price} $</span>
                    </div>

                    <p className="product-short-description">
                        {product.description ||
                            "Este producto no tiene una descripción breve disponible."}
                    </p>

                    <div className="product-stock-status">
                        <span>Disponibles: {product.stock}</span>
                    </div>

                    <div className="product-add-to-cart">
                        <button
                            onClick={() => addToCart(product)}
                            className="add-to-cart-button"
                        >
                            Agregar al Carrito
                        </button>
                    </div>

                    <div className="product-navigation-link">
                        <Link to="/" className="back-to-home-link">
                            Volver al inicio
                        </Link>
                    </div>
                </div>
            </div>

            <section className="related-products-section">
                {productsToShow.length > 0 ? (
                    <div className="related-products-grid">
                        {productsToShow.map((relatedProd) => (
                            <Product
                                key={relatedProd.id}
                                product={relatedProd}
                                addToCart={addToCart}
                            />
                        ))}
                    </div>
                ) : (
                    <p>No hay productos relacionados de este tipo.</p>
                )}
            </section>

            <Footer />
        </div>
    );
};

export default DetailsProducts;
