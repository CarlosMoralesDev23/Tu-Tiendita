import React from "react";

import ListProducts from "../../ListProducts/ListProducts";

const Shoes = ({
    products,
    cart,
    addToCart,
    incrementQuantity,
    decrementQuantity,
    removeItemFromCart,
}) => {
    const theShoes = products.filter((product) => product.type === "zapato");

    return (
        <div>
            <div className="Zapatos">
                <h2>Zapatos</h2>
                <div className="contenedorTarjetaZapatos">
                    <ListProducts
                        products={theShoes}
                        addToCart={addToCart}
                        removeItemFromCart={removeItemFromCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default Shoes;