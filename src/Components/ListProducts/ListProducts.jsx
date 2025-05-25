import React from "react";
import Product from "../ListProducts/Product"
import "../../Styles/ListProducts/ListProducts.css";

const ListProducts = ({products = [], addToCart}) => {




    return (
        <div className="contenedorListProducts">
            {
                products.map((product)=>(
                    <Product key={product.id} product={product} addToCart={addToCart}/>
                ))
            }
        </div>
    );
};

export default ListProducts;
