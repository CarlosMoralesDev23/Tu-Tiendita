import React from "react";

const FormularioProducto = ({ onAgregar }) => {
    const [producto, setProductos] = useState({
        nombre: "",
        precio: "",
        desccripcion: "",
    });

    const [errores, setErrores] = useState({});

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductos({ ...producto, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onAgregar(producto);
        setProductos({
            nombre: "",
            precio: "",
            desccripcion: "",
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h2>AGREGAR Productos</h2>

                <div>
                    <label htmlFor="">Nombre:</label>
                    <input type="text" name="name" value={product.name} onChange={handleChange} required />
                    {errores.nombre && (
                        <p style={{color:"red"}}>{errores.nombre}</p>
                    )}
                </div>
            </form>
        </div>
    );
};

export default FormularioProducto;
