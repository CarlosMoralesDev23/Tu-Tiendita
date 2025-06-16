import React from "react";
import Product from "../ListProducts/Product"
import "../../Styles/ListProductsCSS/ListProducts.css";

const ListProducts = ({products = []}) => {

    return (
        <div className="contenedorListProducts">
            {
                products.map((product)=>(
                    <Product key={product.id} product={product}/>
                ))
            }
        </div>
    );
};

export default ListProducts;
