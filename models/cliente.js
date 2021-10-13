import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema cliente
    const clienteSchema = new Schema (
        {
            "identificacion" : { type: Number, required: [true, 'Id requerido']},
            "nombre" : { type: String, required: [true, 'Nombre requerido']},
            "email" : { type: String, required: [true, 'Email requerido']},
            "contrasena" : { type: String, required: [true, 'Contraseña requerida']},
            "celular" : { type: Number, required: [true, 'Celular requerido']},
            "direccion" : { type: String, required: [true, 'Dirección requerida']},
            "imagen" : String
        }
    )

    // Creación del modelo cliente
    const Cliente = mongoose.model('Cliente', clienteSchema);
    export default Cliente;