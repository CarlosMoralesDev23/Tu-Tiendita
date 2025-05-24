import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Remeras = ({ productos }) => {

    const lasRemeras = productos.filter((producto) => producto.type === 'remera')

    return (
        <div>
            <div className="Remeras">
                <h2>Remeras</h2>
                <div className="contenedorTarjetaRemeras">
                    <ListProducts productos={lasRemeras} />
                </div>
            </div>
        </div>
    );
};

export default Remeras;
