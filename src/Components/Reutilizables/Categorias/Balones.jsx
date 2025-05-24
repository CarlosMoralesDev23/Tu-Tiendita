import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Balones = ({ productos }) => {

    const losBalones = productos.filter((producto) => producto.type === 'balon')



    return (
        <div>
            <div className="Balones">
                <h2>Balones</h2>
                <div className="contenedorTarjetaBalones">
                    <ListProducts productos={losBalones} />
                </div>
            </div>
        </div>
    );
};

export default Balones;
