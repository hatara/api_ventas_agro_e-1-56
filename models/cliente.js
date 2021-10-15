import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema cliente
    const clienteSchema = new Schema (
        {
            nombres: String,
            apodo : String,
            email: String,
            contrasena : String,
            c_contrasena : String,
            tipo_doc : String,
            numero_doc : String,
            telefono : Number,
            direccion: String
        }
    )

    
    

    // Creación del modelo cliente
    const Cliente = mongoose.model('Cliente', clienteSchema);

    export default Cliente;