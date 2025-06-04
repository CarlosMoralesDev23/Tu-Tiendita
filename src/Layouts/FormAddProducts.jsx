import React from "react";

const FormAddProducts = () => {

    const [product, setProduct] = useState({
        id:"",
        name:"",
        description:"",
        price:"",
        stock:"",
        image:"",
        type:""
        
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e)=>{

        const {name, value} = e.target;

        setProduct({...product, [name]: value })
    }


    const validateForm = ()=>{

        const newErrors = {};

        if(!product.nameProduct.trim()){
            newErrors.nameProductError = "El nombre es requerido" 
        }
        
        if(!product.price || product.price <= 10){
            newErrors.priceProductError = "El precio es requerido, debe ser mayor a 0" 
        }

        if(!product.descriptionProduct.trim() || product.descriptionProduct.length < 10){
            newErrors.descriptionProductError = "La descripción es requerida, debe tener al menos 10 caracteres"
        }

        setErrors(newErrors)

        return Object.keys(newErrors).length === 0;
    }

    const handleSubmit = (e)=>{
        e.preventDefault()

        if (!validateForm()){
            return
        }

        onAgregar(product)

        setProduct({
            nameProduct: "",
            priceProduct: "",
            descriptionProduct: "",
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label>Nombre:</label>
                <input
                    type="text"
                    name="nombre"
                    value={producto.nombre}
                    onChange={handleChange}
                    required
                />
                {errores.nombre && (
                    <p style={{ color: "red" }}>{errores.nombre}</p>
                )}
            </div>
            <div>
                <label>Precio:</label>
                <input
                    type="number"
                    name="precio"
                    value={producto.precio}
                    onChange={handleChange}
                    required
                    min="0"
                />
                {errores.precio && (
                    <p style={{ color: "red" }}>{errores.precio}</p>
                )}
            </div>

            <div>
                <label>Descripción:</label>
                <textarea
                    name="descripcion"
                    value={producto.descripcion}
                    onChange={handleChange}
                    required
                />
                {errores.descripcion && (
                    <p style={{ color: "red" }}>{errores.descripcion}</p>
                )}
            </div>
            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormAddProducts;
