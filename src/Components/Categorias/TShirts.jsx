import React, { useContext } from "react";
import ListProducts from "../ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";


const TShirts = () => {
    const { theTShirts } = useContext(ProductContext);

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
