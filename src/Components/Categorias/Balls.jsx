import React, { useContext } from "react";
import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";

const Balls = () => {
    const { theBalls } = useContext(ProductContext);

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