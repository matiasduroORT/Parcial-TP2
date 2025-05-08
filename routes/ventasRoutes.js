import express from 'express';
import {
    getVentas,
    getVentaById,
    crearVenta,
} from '../controllers/ventasController.js'

const router = express.Router()

router.get('/', getVentas)
router.get('/:id', getVentaById)
router.post('/', crearVenta)

export default router