import React, { useContext } from "react";
import { CartContext } from "../../../context/CartContext";


const ProductBotonAdd = ({ product = {} }) => {
    const { addToCart } = useContext(CartContext);

    const isOutOfStock = product.stock <= 0;

    return (
        <div className="contenedorAgregar">
            <button
                onClick={() => addToCart(product)}
                disabled={isOutOfStock}
                className={isOutOfStock ? "disabled-button" : ""}
            >
                Agregar
            </button>
        </div>
    );
};

export default ProductBotonAdd;
