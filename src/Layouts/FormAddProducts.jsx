import React from "react";

const FormAddProducts = () => {
    const [product, setProduct] = useState({
        id:"", name:"", description:"", price:"",
        stock:"", image:"",
        type:""
    })
    const [errors, setErrors] = useState({})
    const handleChange = (e)=>{
        const {name, value} = e.target;
        setProduct({...product, [name]: value })
    }

    const validateForm = ()=>{
        const newErrors = {};
        if(!product.id.trim() || product.id.length < 4){
            newErrors.idError = "El id es obligatorio"
        }
        
        if(!product.name.trim() || product.name.length < 2){
            newErrors.nameError = "El nombre debe tener al menos 2 caracteres" 
        }
        
        if(!product.description.trim() || product.description.length < 8){
            newErrors.descriptionError = "La descripción es requerida, debe tener al menos 10 caracteres"
        }

        if(!product.price || product.price <= 10){
            newErrors.priceError = "El precio es requerido, debe ser mayor a 0" 
        }

        if(!product.stock || product.stock < 1){
            newErrors.stockError = "Debes incluir un valor a Stock inicial"
        }

        if(!product.image.trim() || product.image.length < 4){
            newErrors.imageError = "Debes incluir una ruta de imagen"
        }

        if(!product.type.trim() ||product.type.length < 5){
            newErrors.typeError = "Incluye el tipo de producto, sino no podes incluirlo en su categoria"
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
            id: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            type: "",
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
