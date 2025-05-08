import express from 'express';
import {
    crearVenta,
    getVentas,
    getVentaById
} from '../controllers/ventasController.js';

const router = express.Router();

// Rutas para ventas
router.post('/api/ventas', crearVenta);
router.get('/api/ventas', getVentas);
router.get('/api/ventas/:id', getVentaById);

export default router;