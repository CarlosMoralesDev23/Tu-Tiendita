import { useContext } from "react";
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
import DetailsProducts from "./Components/DetailsProducts/DetailsProducts.jsx";
import Admin from "./Layouts/Admin.jsx";
import RutasProtegida from "./auth/RutasProtegida.jsx";
import { CartContext } from "./context/CartContext.jsx";


function App() {

    const {
        cart,
        products,
        loader,
        error,
        addToCart,
        removeItemFromCart,
        handleOpenCart,
        emptyCart, incrementQuantity, decrementQuantity, isAuthenticated, isCartOpen, handleCloseCart
    } = useContext(CartContext);





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
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    {/* <Route path="/productos/:id/usuarios/:idUser" element={<DetallesProductos/>}></Route> */}
                    <Route
                        path="/products/:id"
                        element={
                            <DetailsProducts
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/Categories"
                        element={
                            <Categories
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/Offers"
                        element={
                            <Offers
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/Register"
                        element={
                            <Register
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/Login"
                        element={
                            <Login
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/MyCount"
                        element={
                            <MyCount
                                products={products}
                                loader={loader}
                                handleOpenCart={handleOpenCart}
                                cart={cart}
                                addToCart={addToCart}
                                emptyCart={emptyCart}
                                incrementQuantity={incrementQuantity}
                                decrementQuantity={decrementQuantity}
                                removeItemFromCart={removeItemFromCart}
                            />
                        }
                    ></Route>

                    <Route
                        path="/admin"
                        element={
                            <RutasProtegida isAuthenticated={isAuthenticated}>
                                <Admin />
                            </RutasProtegida>
                        }
                    />

                    <Route path="/login" element={<Login />} />

                    <Route path="*" element={<NF404 />}></Route>
                </Routes>
            </Router>

            <Cart
                isCartOpen={isCartOpen}
                handleCloseCart={handleCloseCart}
                products={products}
                loader={loader}
                handleOpenCart={handleOpenCart}
                cart={cart}
                addToCart={addToCart}
                emptyCart={emptyCart}
                incrementQuantity={incrementQuantity}
                decrementQuantity={decrementQuantity}
                removeItemFromCart={removeItemFromCart}
            />
        </>
    );
}

export default App;
