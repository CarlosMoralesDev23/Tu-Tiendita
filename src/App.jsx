import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layouts/Home";
import MiCuenta from "./Layouts/MyCount.jsx";
import Categorias from "./Layouts/Categories.jsx";
import Ofertas from "./Layouts/Offers.jsx";
import Registrate from "./Layouts/Register.jsx";
import Login from "./Layouts/Login";
import Cart from "./Components/Reutilizables/Cart/Cart";
import NF404 from "./Components/Reutilizables/NF404/NotFound.jsx";


function App() {

    // carrito para agregar productos
    const [cart, setCart] = useState([])

    // productos para guardar los datos traidos del json
    const [products, setProducts] = useState([])

    //error para cuando no cargue la pagina
    const [error, setError] = useState(false)

    //loader para cargar spiner/loader mientras cargan los productos
    const [loader, setLoader] = useState(true)

    useEffect(() => {
    
        fetch('/public/data/productos.json')
        .then((resp)=> resp.json())
        .then((data)=> {
            setTimeout(() => {
                setProducts(data); setLoader(false)
            }, 1250);
        })
        .catch((error)=> {
            console.log("Error: ", error); setLoader(false); setError(true)
        })
    }, [])



    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={<Home products={products} loader={loader} />}
                    ></Route>
                    <Route path="/Categories" element={<Categorias />}></Route>
                    <Route path="/Offers" element={<Ofertas />}></Route>
                    <Route path="/Register" element={<Registrate />}></Route>
                    <Route path="/Login" element={<Login />}></Route>
                    <Route path="/MyCount" element={<MiCuenta />}></Route>
                    <Route path="/Cart" element={<Cart />}></Route>
                    <Route path="*" element={<NF404 />}></Route>
                </Routes>
            </Router>
        </>
    );
}

export default App;
