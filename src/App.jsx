import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layouts/Home.jsx";
import Categories from "./Layouts/Categories.jsx";
import Login from "./Layouts/Login.jsx";
import DetailsProducts from "./Components/DetailsProducts/DetailsProducts.jsx";
import Admin from "./Layouts/Admin/Admin.jsx";

import NF404 from "./Utils/NotFound.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import RutasProtegida from "./auth/RutasProtegida.jsx";


function App() {

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

                    <Route path="/Login" element={<Login />}></Route>



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

            <Cart />
        </>
    );
}

export default App;
