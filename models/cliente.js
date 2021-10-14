import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema cliente
    const clienteSchema = new Schema (
        {
            "nombres" : { type: String, required: [true, 'Nombre requerido']},
            "apodo" : String,
            "email" : { type: String, required: [true, 'Email requerido']},
            "contrasena" : { type: String, required: [true, 'Contraseña requerida']},
            "c_contrasena" : { type: String, required: [true, 'Contraseña requerida']},
            "tipo_doc" : { type: Number, required: [true, 'Id requerido']},
            "numero_doc" : { type: Number, required: [true, 'Id requerido']},
            "telefono" : { type: Number, required: [true, 'Celular requerido']},
            "direccion" : { type: String, required: [true, 'Dirección requerida']},
        }
    )

    // Creación del modelo cliente
    const Cliente = mongoose.model('Cliente', clienteSchema);
    export default Cliente;