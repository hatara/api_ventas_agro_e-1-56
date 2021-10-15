import express from 'express';
const router = express.Router();

// Importar el modelo
import Cliente from '../models/cliente';

// Ruta para crear cliente
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
})


// Ruta para buscar cliente
router.get('/cliente/:email', async(req, res) => {
    const email = req.params.email;
    try {
        const clienteDB = await Cliente.findOne({email});
        res.json(clienteDB);
    } catch (error) {
        return res.status(400).json({
            mensaje: 'Ocurrió un error al buscar cliente',
            error
        })
    }
});


//Exportar configuración
module.exports = router;