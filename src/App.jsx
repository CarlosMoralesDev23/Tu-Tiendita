import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Layouts/Home.jsx";
import Login from "./Layouts/Login.jsx";
import Admin from "./Layouts/Admin/Admin.jsx";

import Balls from "./Components/Categorias/Balls.jsx"; 
import Shoes from "./Components/Categorias/Shoes.jsx"; 
import TShirts from "./Components/Categorias/TShirts.jsx"; 

import DetailsProducts from "./Components/DetailsProducts/DetailsProducts.jsx";
import NF404 from "./Utils/NotFound.jsx";
import Cart from "./Components/Cart/Cart.jsx";
import ProtectedRoute from "./auth/ProtectedRoute.jsx";

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

                    <Route path="/Login" element={<Login />}></Route>

                    <Route path="/category/balones" element={<Balls />}></Route>
                    <Route path="/category/zapatos" element={<Shoes />}></Route>

                    <Route
                        path="/category/remeras"
                        element={<TShirts />}
                    ></Route>

                    <Route
                        path="/admin"
                        element={
                            <ProtectedRoute requiredRole="admin">
                                <Admin />
                            </ProtectedRoute>
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
