import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const TShirts = ({
    products,
    cart,
    addToCart,
    incrementQuantity,
    decrementQuatity,
    removeItemFromCart,
}) => {
    const theTShirts = products.filter((product) => product.type === "remera");

    return (
        <div>
            <div className="Remeras">
                <h2>Remeras</h2>
                <div className="contenedorTarjetaRemeras">
                    <ListProducts
                        products={theTShirts}
                        addToCart={addToCart}
                        removeItemFromCart={removeItemFromCart}
                    />
                </div>
            </div>
        </div>
    );
};

export default TShirts;
