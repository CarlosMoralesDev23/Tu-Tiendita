import React, {useContext} from "react";
import Product from "../ListProducts/Product"
import "../../Styles/ListProducts/ListProducts.css";
import { CartContext } from "../../context/CartContext";

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
