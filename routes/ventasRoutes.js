import express from 'express';

import {
    home,
    getVentas,
    getVentasById,
    CrearVenta,
} from '../controllers/ventasController.js'

const router = express.Router()


router.get('/', home); 
router.get('/', getVentas); 
router.get('/:id', getVentasById);
router.post('/', CrearVenta); 

export default router