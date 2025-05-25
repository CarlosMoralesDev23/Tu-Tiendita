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

    const addToCart = (product)=>{

        const isProduct = cart.find((item)=> item.id === product.id)

        if (isProduct) {

            setCart( cart.map((item) => item.id === product.id ? {...item, quantity: item.quantity+1}:item ));

        }else{
            setCart([...cart, {...product, quantity:1}])
        }

        console.log(cart)
    }

    const emptyCart = ()=>{
        setCart([])
    }

    const incrementQuantity = (product)=>{

        (product.quantity < product.stock ) ? setCart(cart.map((item) =>
            item.id === product.id
                ? { ...item, quantity: item.quantity + 1 }
                : item
        )): null;

    }

    const decrementQuantity = (product) => {

        product.quantity === 1 ? (removeItemFromCart(product)) : (setCart(
            cart.map((item)=> item.id === product.id ? {...item, quantity: item.quantity -1 }: item)
        ))
    }

    const removeItemFromCart = (product) => {
        setCart(cart.filter((item) => (item.id !== product.id ? item : null)));
    };







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
