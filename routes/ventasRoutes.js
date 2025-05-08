import express from 'express'

import {
    CrearVenta,
    ObtenerVentas,
    ObtenerVentaPorId,
} from '../controllers/ventasController.js'

const router = express.Router()

router.post('/api/ventas', CrearVenta)
router.get('/api/ventas', ObtenerVentas)
router.get('/api/ventas/:ventaId', ObtenerVentaPorId)

export default router