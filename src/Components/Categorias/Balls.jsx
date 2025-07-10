import React from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";

const Balls = ({ products }) => {
    const theBalls = products.filter((product) => product.type === "ball");

    if (theBalls.length === 0) {
        return <p>No hay balones disponibles en este momento.</p>;
    }

    return (
        <div>
            <div className="Balones">
                <h2>Balones</h2>
                <div className="contenedorTarjetaBalones">
                    <ListProducts products={theBalls} />
                </div>
            </div>
        </div>
    );
};

export default Balls;
