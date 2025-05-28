import React, {useContext} from "react";
import { useParams } from "react-router-dom";
import Header from "../Fijos/Header/Header";
import Nav from "../Fijos/Nav/Nav";
import Footer from "../Fijos/Footer/Footer";
import { CartContext } from "../../context/CartContext";

const DetailsProducts = ( ) => {
    const { id } = useParams();
    // const {id, idUser}= useParams()

    const {products} = useContext(CartContext)

    const product = products.find((Product) => Product.id == id);

    return (
        <div>
            <Header />
            <Nav/>

            <h1>Detalle del producto: {id}</h1>
            {/* <h2>Detalle del usuario:{idUser}</h2> */}

            {product ? <h2>{product.name}</h2> : <p>Producto no encontrado</p>}

            <Footer />
        </div>
    );
};

export default DetailsProducts;
