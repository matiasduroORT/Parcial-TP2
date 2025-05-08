import express from 'express';
import {
    getSales,
    getSaleById,
    CrearSale,
} from '../controllers/salesController.js'

const router = express.Router()



router.get('/api/sales', getSales)
router.get('/api/sales/:id', getSaleById)
router.post('/api/sales', CrearSale)




export default router