import express from 'express';
const router = express.Router();

//Importar el modelo
import Categoria from '../models/categoria';

// Ruta para consultar categoria
router.get('/categorias', async(req, res) => {
    try{
        const categoriaDB = await Categoria.find();
        res.json(categoriaDB);
    } catch (error){
        return res.status(400).json({
            mensaje: '¡UPS! Algo salió mal con la consulta',
            error
        })
    }
});

//Exportar configuración
module.exports = router;