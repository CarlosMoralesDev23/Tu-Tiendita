import React, { useContext } from "react";
import { AdminContext } from "../../context/AdminContext.jsx";

const AdminProductsStock = ({ product }) => {
    // const { productos, setProductos } = useContext(AdminContext);

    // const incrementQuantityStock = (productToIncrementStock) => {
    //     const productoInAdministrator = productos.find(
    //         (producto) =>
    //             producto.id === productToIncrementStock.id
    //     );


    //     if (productoInAdministrator) {
    //         if (
    //             productoInAdministrator.stock >= 0 &&
    //             productoInAdministrator.stock <= 1000
    //         ) {
    //             setProductos(
    //                 productos.map((producto) =>
    //                     producto.id === productToIncrementStock.id
    //                         ? { ...producto, stock: producto.stock + 1 }
    //                         : producto
    //                 )
    //             );
    //         }
            
    //     }
    // };

    return (
        <div>
            <button>
                <i className="fa-solid fa-minus"></i>
            </button>
            <span style={{ color: "black" }}>{product.stock}</span>
            <button>
                <i class="fa-solid fa-plus"></i>
            </button>
            {/* <button onClick={() => incrementQuantityStock(product)}>
                <i class="fa-solid fa-plus"></i>
            </button> */}
        </div>
    );
};

export default AdminProductsStock;
