import React from "react";

const FormAddProducts = ({ agregarProducto }) => {
    const [product, setProduct] = useState({
        id: "",
        name: "",
        description: "",
        price: "",
        stock: "",
        image: "",
        type: "",
    });
    const [errors, setErrors] = useState({});
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!product.id.trim() || product.id.length < 4) {
            newErrors.idError = "El id es obligatorio";
        }

        if (!product.name.trim() || product.name.length < 2) {
            newErrors.nameError = "El nombre debe tener al menos 2 caracteres";
        }

        if (!product.description.trim() || product.description.length < 10) {
            newErrors.descriptionError =
                "La descripción es requerida, debe tener al menos 10 caracteres";
        }

        if (!product.price || product.price <= 5) {
            newErrors.priceError = "El precio es requerido, debe ser mayor a 5";
        }

        if (!product.stock || product.stock < 1) {
            newErrors.stockError = "Debes incluir un valor a Stock inicial";
        }

        if (!product.image.trim() || product.image.length < 4) {
            newErrors.imageError = "Debes incluir una ruta de imagen";
        }

        if (!product.type.trim() || product.type.length < 5) {
            newErrors.typeError =
                "Incluye el tipo de producto, sino no podes incluirlo en su categoria";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) {
            return;
        }

        agregarProducto(product);

        setProduct({
            id: "",
            name: "",
            description: "",
            price: "",
            stock: "",
            image: "",
            type: "",
        });

        setErrors({});
        //Ya quese agrego el producto se limpia el estado error.
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Agregar Producto</h2>
            <div>
                <label htmlFor="productId">Id:</label>
                <input
                    type="text"
                    name="id"
                    id="productId"
                    value={product.id}
                    onChange={handleChange}
                    required
                />
                {errors.id && <p style={{ color: "red" }}>{errors.id}</p>}
            </div>
            <div>
                <label htmlFor="productName">Nombre:</label>
                <input
                    type="text"
                    name="name"
                    id="productName"
                    value={product.name}
                    onChange={handleChange}
                    required
                />
                {errors.name && <p style={{ color: "red" }}>{errors.name}</p>}
            </div>
            <div>
                <label htmlFor="productDescription">Descripción:</label>
                <input
                    type="text"
                    name="description"
                    id="productDescription"
                    value={product.description}
                    onChange={handleChange}
                    required
                />
                {errors.description && (
                    <p style={{ color: "red" }}>{errors.description}</p>
                )}
            </div>
            <div>
                <label htmlFor="productPrice">Precio:</label>
                <input
                    type="number"
                    name="price"
                    id="productPrice"
                    value={product.price}
                    onChange={handleChange}
                    required
                    min="0"
                />
                {errors.price && <p style={{ color: "red" }}>{errors.price}</p>}
            </div>
            <div>
                <label htmlFor="productStock">Stock:</label>
                <input
                    type="number"
                    name="stock"
                    id="productStock"
                    value={product.stock}
                    onChange={handleChange}
                    required
                />
                {errors.stock && <p style={{ color: "red" }}>{errors.stock}</p>}
            </div>
            <div>
                <label htmlFor="productImage">Imagen:</label>
                <input
                    type="text"
                    name="image"
                    id="productImage"
                    value={product.image}
                    onChange={handleChange}
                    required
                />
                {errors.image && <p style={{ color: "red" }}>{errors.image}</p>}
            </div>
            <div>
                <label htmlFor="productType">Tipo:</label>
                <input
                    type="text"
                    name="type"
                    id="productType"
                    value={product.type}
                    onChange={handleChange}
                    required
                />
                {errors.type && <p style={{ color: "red" }}>{errors.type}</p>}
            </div>

            <button type="submit">Agregar Producto</button>
        </form>
    );
};

export default FormAddProducts;
