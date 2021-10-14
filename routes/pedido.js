import express from 'express';
const router = express.Router();

//Importar el modelo
import Producto from '../models/pedido';

// Ruta para consultar pedidos
router.get('/pedido', async(req, res) => {
    try{
        const pedidoDB = await Pedido.find();
        res.json(pedidoDB);
    } catch (error){
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});

//Exportar configuración
module.exports = router;