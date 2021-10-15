import express from 'express';
const router = express.Router();

//Importar el modelo
import DetallePedido from '../models/detalle_pedido';

// Ruta para consultar detalle pedido
router.get('/detalle_pedido', async(req, res) => {
    try{
        const detalle_pedidoDB = await DetallePedido.find();
        res.json(detalle_pedidoDB);
    } catch (error){
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});

//Exportar configuración
module.exports = router;