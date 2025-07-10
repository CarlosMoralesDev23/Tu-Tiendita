import React, { useContext } from "react";
import ListProducts from "../ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";


const TShirts = () => {
    const { products } = useContext(ProductContext);
    const theTShirts = products.filter((product) => product.type === "tshirt");

    if (theTShirts.length === 0) {
        return <p>No hay remeras disponibles en este momento.</p>;
    }

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
