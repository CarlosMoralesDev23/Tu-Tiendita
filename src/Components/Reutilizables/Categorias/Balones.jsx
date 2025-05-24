import React from "react";
import ListProducts from "../../ListProducts/ListProducts";

const Balones = ({ productos }) => {

    


    return (
        <div>
            <div className="Balones">
                <h2>Balones</h2>
                <div className="contenedorTarjetaBalones">
                    <ListProducts productos={productos} />
                </div>
            </div>
        </div>
    );
};

export default Balones;
