import express from 'express';
import {
    CrearVenta,
    getVentas,
    getVentasById,
    ModificarUsuario,
} from '../controllers/salesController.js'

const router = express.Router()


router.get('/api/ventas', getVentas)
router.get('/api/ventas/:id', getVentasById)
router.post('/api/ventas', CrearVenta)
router.post('/api/ventas', ModificarUsuario)

export default router