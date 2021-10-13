import  mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema Pedido
    const PedidoSchema = new Schema (
        {
            "identificacion" : { type: Number, required: [true, 'Identificación requerida']},
            "id_pedido" : { type: Number, required: [true, 'Id_pedido requerido']},
            "valor_total" : { type: Number, required: [true, 'Valor total requerido']},
            "estado" : { type: String, required: [true, 'estado requerido']},
            "fecha_envio" : String,
        }
    )

    // Creación del modelo Detalle de pedido
    const Pedido = mongoose.model('Pedido', PedidoSchema);
    export default Pedido;