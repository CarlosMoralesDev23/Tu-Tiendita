import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const TShirts = ({ products }) => {

    const theTShirts= products.filter((product) => product.type === 'remera')

    return (
        <div>
            <div className="Remeras">
                <h2>Remeras</h2>
                <div className="contenedorTarjetaRemeras">
                    <ListProducts products={theTShirts} />
                </div>
            </div>
        </div>
    );
};

export default TShirts;
