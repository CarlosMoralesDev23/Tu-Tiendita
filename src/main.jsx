import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";
import { CartProvider } from "./context/CartContext.jsx";
import { AdminProvider } from "./context/AdminContext.jsx";
import {FormAddProductsProvider} from "./context/FormAddProductsContext.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <CartProvider>
                <AdminProvider>
                    <FormAddProductsProvider>
                        <App />
                    </FormAddProductsProvider>
                </AdminProvider>
            </CartProvider>
        </AuthProvider>
    </StrictMode>
);
