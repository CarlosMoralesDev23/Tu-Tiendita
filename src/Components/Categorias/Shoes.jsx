import React, { useContext } from "react";

import ListProducts from "../../Components/ListProducts/ListProducts";
import { ProductContext } from "../../context/ProductContext";


const Shoes = () => {
    const { theShoes } = useContext(ProductContext);

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
