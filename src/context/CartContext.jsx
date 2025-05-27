import {createContext, useState, useEffect} from "react";



export const CartContext = createContext()

export const CartProvider = ( { children } ) => {

    const [cart, setCart] = useState([])
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [products, setProducts] = useState([])
    const [error, setError] = useState(false)
    const [loader, setLoader] = useState(true)
    const [isAuthenticated, setIsAuthenticated] = useState(false)

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
        <CartContext.Provider
            value={{
                cart,
                products,
                loader,
                error,
                addToCart,
                removeItemFromCart,
                handleOpenCart,
                emptyCart,
                incrementQuantity, decrementQuantity, isAuthenticated, isCartOpen, handleCloseCart
            }}
        >
            {children}
        </CartContext.Provider>
    );


}





