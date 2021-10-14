import express from 'express';
const router = express.Router();

//Importar el modelo
import Producto from '../models/cliente';

// Ruta para consultar cliente
router.get('/cliente', async(req, res) => {
    try{
        const clienteDB = await Cliente.find();
        res.json(clienteDB);
    } catch (error){
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});

//Exportar configuración
module.exports = router;