import { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layouts/Home.jsx";
import MyCount from "./Layouts/MyCount.jsx";
import Categories from "./Layouts/Categories.jsx";
import Offers from "./Layouts/Offers.jsx";
import Register from "./Layouts/Register.jsx";
import Login from "./Layouts/Login.jsx";
import Cart from "./Components/Reusables/Cart/Cart.jsx";
import NF404 from "./Components/Reusables/NF404/NotFound.jsx";


function App() {

    // carrito para agregar productos
    const [cart, setCart] = useState([])

    const [isCartOpen, setIsCartOpen] = useState(false)

    // productos para guardar los datos traidos del json
    const [products, setProducts] = useState([])

    //error para cuando no cargue la pagina
    const [error, setError] = useState(false)

    //loader para cargar spiner/loader mientras cargan los productos
    const [loader, setLoader] = useState(true)

    useEffect(() => {
    
        fetch('/data/products.json')
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




    //* FUNCIONES

    const handleOpenCart = () => setIsCartOpen(true)
    const handleCloseCart = () => setIsCartOpen(false)





    return (
        <>
            <Router>
                <Routes>
                    <Route
                        path="/"
                        element={
                            <Home
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/Categories"
                        element={<Categories handleOpenCart={handleOpenCart} />}
                    ></Route>

                    <Route
                        path="/Offers"
                        element={<Offers handleOpenCart={handleOpenCart} />}
                    ></Route>

                    <Route
                        path="/Register"
                        element={<Register handleOpenCart={handleOpenCart} />}
                    ></Route>

                    <Route
                        path="/Login"
                        element={<Login handleOpenCart={handleOpenCart} />}
                    ></Route>

                    <Route
                        path="/MyCount"
                        element={<MyCount handleOpenCart={handleOpenCart} />}
                    ></Route>

                    <Route path="*" element={<NF404 />}></Route>
                </Routes>
            </Router>

            <Cart isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
        </>
    );
}

export default App;
