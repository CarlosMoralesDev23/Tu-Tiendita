import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Balls = ({ products, cart, addToCart }) => {
    const theBalls = products.filter((product) => product.type === 'balon')

    return (
        <div>
            <div className="Balones">
                <h2>Balones</h2>
                <div className="contenedorTarjetaBalones">
                    <ListProducts products={theBalls} addToCart={addToCart} />
                </div>
            </div>
        </div>
    );
};

export default Balls;
