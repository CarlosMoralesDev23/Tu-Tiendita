import React, {useContext} from "react";

import ListProducts from "../../ListProducts/ListProducts";
import { CartContext } from "../../../context/CartContext";

const Shoes = ( ) => {

    const {theShoes} = useContext(CartContext)

    return (
        <div>
            <div className="Zapatos">
                <h2>Zapatos</h2>
                <div className="contenedorTarjetaZapatos">
                    <ListProducts
                        products={theShoes}
                    />
                </div>
            </div>
        </div>
    );
};

export default Shoes;
