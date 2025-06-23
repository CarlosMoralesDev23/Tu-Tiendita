import { useContext } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layouts/Home.jsx";
import MyCount from "./Layouts/MyCount.jsx";
import Categories from "./Layouts/Categories.jsx";
import Offers from "./Layouts/Offers.jsx";
import Register from "./Layouts/Register.jsx";
import Login from "./Layouts/Login.jsx";
import DetailsProducts from "./Components/DetailsProducts/DetailsProducts.jsx";
import Admin from "./Layouts/Admin/Admin.jsx";

import NF404 from "./Components/Reusables/NF404/NotFound.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import RutasProtegida from "./auth/RutasProtegida.jsx";

import { CartContext } from "./context/CartContext.jsx";

function App() {
    const { isCartOpen, handleCloseCart } = useContext(CartContext);

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />}></Route>

                    <Route
                        path="/products/:id"
                        element={<DetailsProducts />}
                    ></Route>

                    <Route path="/Categories" element={<Categories />}></Route>

                    <Route path="/Offers" element={<Offers />}></Route>

                    <Route path="/Register" element={<Register />}></Route>

                    <Route path="/Login" element={<Login />}></Route>

                    <Route path="/MyCount" element={<MyCount />}></Route>

                    <Route
                        path="/admin"
                        element={
                            <RutasProtegida>
                                <Admin />
                            </RutasProtegida>
                        }
                    />

                    <Route path="*" element={<NF404 />}></Route>
                </Routes>
            </Router>

            <Cart isCartOpen={isCartOpen} handleCloseCart={handleCloseCart} />
        </>
    );
}

export default App;
