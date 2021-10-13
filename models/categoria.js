import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema categoría
    const categoriaSchema = new Schema (
        {
            "id" : { type: Number, required: [true, 'Id requerido']},
            "nombre" : { type: String, required: [true, 'Nombre requerido']},
            "banner" : String
        }
    )

    // Creación del modelo producto
    const Categoria = mongoose.model('Categoria', categoriaSchema);
    export default Categoria;