import React, {useContext} from "react";
import ListProducts from "../../ListProducts/ListProducts";
import { CartContext } from "../../../context/CartContext";

const Balls = ( ) => {

    const { theBalls } = useContext(CartContext)

    return (
        <div>
            <div className="Balones">
                <h2>Balones</h2>
                <div className="contenedorTarjetaBalones">
                    <ListProducts
                        products={theBalls}
                    />
                </div>
            </div>
        </div>
    );
};

export default Balls;
