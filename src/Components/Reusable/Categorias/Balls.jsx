import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Balls = ({ products }) => {

    const theBalls = products.filter((product) => product.type === 'balon')



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
