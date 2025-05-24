import React from "react";
import Product from "../ListProducts/Product"
import "../../Styles/ListProducts/ListProducts.css";

const ListProducts = ({products}) => {
    return (
        <div className="contenedorListProducts">
            {
                products.map((product)=>(
                    <Product key={product.id} producto={product}/>
                ))
            }
        </div>
    );
};

export default ListProducts;
