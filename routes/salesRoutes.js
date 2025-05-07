import express from 'express';
import {
    getSalesById,
    CreateSale,
} from '../controllers/salesController'

const router = express.Router()


//TO-DO:
router.post('/api/sales', CreateSale)
router.get('/api/sales/:id', getSalesById)




export default router