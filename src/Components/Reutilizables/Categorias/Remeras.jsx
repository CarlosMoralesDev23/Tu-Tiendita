import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Remeras = ({ productos }) => {
    return (
        <div>
            <div className="Remeras">
                <h2>Remeras</h2>
                <div className="contenedorTarjetaRemeras">
                    <ListProducts productos={productos} />
                </div>
            </div>
        </div>
    );
};

export default Remeras;
