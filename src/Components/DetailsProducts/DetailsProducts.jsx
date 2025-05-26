import React from "react";
import { useParams } from "react-router-dom";

const DetailsProducts = ({products}) => {

    const {id}= useParams()
    // const {id, idUser}= useParams()


    const product = products.find((Product)=> Product.id == id)
    
    return (
        <div>
            <h1>Detalle del producto: {id}</h1>
            {/* <h2>Detalle del usuario:{idUser}</h2> */}

            {product ? (<h2>{product.name}</h2>) : (<p>Producto no encontrado</p>)}
        </div>
    );
};

export default DetailsProducts;
