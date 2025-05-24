import React from "react";

import ListProducts from "../../ListProducts/ListProducts";

const Zapatos = ({ productos }) => {

    const losZapatos = productos.filter((producto)=> producto.type === 'zapato')
    console.log(losZapatos)

    return (
        <div>
            <div className="Zapatos">
                <h2>Zapatos</h2>
                <div className="contenedorTarjetaZapatos">
                    <ListProducts productos={losZapatos} />
                </div>
            </div>
        </div>
    );
};

export default Zapatos;