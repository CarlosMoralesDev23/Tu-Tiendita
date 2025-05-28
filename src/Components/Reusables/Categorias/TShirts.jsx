import React, {useContext} from "react";
import ListProducts from "../../ListProducts/ListProducts";
import { CartContext } from "../../../context/CartContext";

const TShirts = ( ) => {

    const {theTShirts} = useContext(CartContext)

    return (
        <div>
            <div className="Remeras">
                <h2>Remeras</h2>
                <div className="contenedorTarjetaRemeras">
                    <ListProducts
                        products={theTShirts}
                    />
                </div>
            </div>
        </div>
    );
};

export default TShirts;
