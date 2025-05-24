import React from "react";

import ListProducts from "../../ListProducts/ListProducts";

const Zapatos = ({ productos }) => {
    return (
        <div>
            <div className="Zapatos">
                <h2>Zapatos</h2>
                <div className="contenedorTarjetaZapatos">
                    <ListProducts productos={productos} />
                </div>
            </div>
        </div>
    );
};

export default Zapatos;
