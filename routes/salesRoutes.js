import express from 'express';
import {
    getSales,
    getSalesById,
    CrearSales,
} from '../controllers/salesController.js'

const router = express.Router()


router.get('/api/sales', getSales)
router.get('/api/sales/:id', getSalesById)
router.post('/api/sales', CrearSales)

export default router