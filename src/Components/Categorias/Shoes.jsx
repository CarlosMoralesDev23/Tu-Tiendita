import React, { useContext } from "react";

import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";


const Shoes = () => {
    const { products } = useContext(ProductContext);
    const theShoes = products.filter((product) => product.type === "shoes");

    if (theShoes.length === 0) {
        return <p>No hay zapatos disponibles en este momento.</p>;
    }

    return (
        <div>
            <div className="Zapatos">
                <h2>Zapatos</h2>
                <div className="contenedorTarjetaZapatos">
                    <ListProducts products={theShoes} />
                </div>
            </div>
        </div>
    );
};

export default Shoes;
