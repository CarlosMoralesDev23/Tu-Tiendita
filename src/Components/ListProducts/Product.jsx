import React, { useContext } from "react";
import "./Product.css";
import { CartContext } from "../../context/CartContext";
import ProductHead from "./Product/ProductHead";
import ProductRating from "./Product/ProductRating";
import ProductImage from "./Product/ProductImage";
import ProductPrice from "./Product/ProductPrice";
import ProductStock from "./Product/ProductStock";
import ProductBotonAdd from "./Product/ProductBotonAdd";
import ProductBotonSeeMore from "./Product/ProductBotonSeeMore";


const Product = ({ product = {} }) => {
    const { addToCart } = useContext(CartContext);

    const isOutOfStock = product.stock <= 0;

    return (
        <div className={`tarjetaProducto ${isOutOfStock ? "agotado" : ""}`}>

            <ProductHead   product={product}/>

            <ProductRating product={product}/>

            <ProductImage  product={product}/>

            <ProductPrice  product={product}/>

            <ProductStock  product={product}/>

            <ProductBotonAdd  product={product}/>

            <ProductBotonSeeMore product={product}/>

        </div>
    );
};

export default Product;
