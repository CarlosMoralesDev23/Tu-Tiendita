import React from "react";
import Product from "../ListProducts/Product"
import "../../Styles/ListProducts/ListProducts.css";

const ListProducts = ({productos}) => {
    return (
        <div className="contenedorListProducts">
            {
                productos.map((producto)=>(
                    <Product key={producto.id} producto={producto}/>
                ))
            }
        </div>
    );
};

export default ListProducts;
