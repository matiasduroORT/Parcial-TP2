import express from 'express';
import {
    crearVenta,
    getVentas,
    getVentaById
} from '../controllers/ventasController.js'

const router = express.Router()


router.get('/api/ventas', getVentas)
router.get('/api/ventas/:id', getVentaById)
router.post('/api/ventas/:idAlumno', crearVenta)




export default router