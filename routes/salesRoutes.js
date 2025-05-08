import express from 'express';
import {
    getSalesById,
    CreateSale,
    getSales,
} from '../controllers/salesController.js'

const router = express.Router()


//TO-DO:
router.post('/api/sales', CreateSale)
router.get('/api/sales/:id', getSalesById)
router.get('/api/sales', getSales)




export default router