import express from 'express';
const router = express.Router();

//Importar el modelo
import Producto from '../models/producto';

// Ruta para consultar productos
router.get('/productos', async(req, res) => {
    try{
        const productoDB = await Producto.find();
        res.json(productoDB);
    } catch (error){
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});

//Exportar configuración
module.exports = router;