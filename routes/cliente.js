import express from 'express';
const router = express.Router();

//Importar el modelo
import Producto from '../models/cliente';

//Ruta para crear cliente
router.post('/nuevo-cliente', async(req, res) => {
    const body = req.body.data;
    // console.log(body);
    try {
        const clienteDB = await Cliente.create(body);
        res.status(200).json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});


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