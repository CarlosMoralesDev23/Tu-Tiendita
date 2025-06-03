import React from "react";

const FormularioProducto = ({onAgregar }) => {

    const [ producto, setProductos ] = useState( 
        {
            nombre : '',
            precio : '',
            desccripcion: '',
        }
    )

    const [errores, setErrores] = useState({})

    const handleChange = (e)=>{
        const {name, value} = e.target
        setProductos({...producto, [name]:value})
    }

    const hundleSubmit = (e)=>{
        e.preventDefault()
        onAgregar(producto)
        setProductos({
            nombre: "",
            precio: "",
            desccripcion: "",
        });
    }


    return (
        <div>
            <h2>AGREGAR Productos</h2>
        </div>
    );
};

export default FormularioProducto;
