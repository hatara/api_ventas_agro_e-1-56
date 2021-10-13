import  Mongoose  from 'mongoose';
const Schema = mongoose.Schema;

    //Estructura del esquema Detalle de pedido
    const detalle_pedidoSchema = new Schema (
        {
            "id_pedido" : { type: Number, required: [true, 'Id_pedido requerido']},
            "id_producto" : { type: Number, required: [true, 'Id_producto requerido']},
            "producto" : { type: String, required: [true, 'Nombre del producto requerido']},
            "cantidad" : { type: String, required: [true, 'Cantidad requerida']},
            "valor_total" : { type: Number, required: [true, 'Valor total requerido']},
        }
    )

    // Creación del modelo Detalle de pedido
    const Detalle_pedido = mongoose.model('Detalle_pedido', detalle_pedidoSchema);
    export default Detalle_pedido;