import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;


    //Estructura del esquema producto
    const productoSchema = new Schema (
        {
            "id" : { type: Number, required: [true, 'Id requerido']},
            "categoria" : { type: Number, required: [true, 'Categoría requerida']},
            "nombre" : { type: String, required: [true, 'Nombre requerido']},
            "unidad" : { type: String, required: [true, 'Unidad requerida']},
            "precio" : { type: Number, required: [true, 'Precio requerid0']},
            "imagen" : String
        }
    )

    // Creación del modelo producto
    const Producto = mongoose.model('Producto', productoSchema);
    export default Producto;
    
