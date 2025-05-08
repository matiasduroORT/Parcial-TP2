import express from 'express';
import { crearVenta, obtenerVentas } from '../controllers/SalesController.js';

const router = express.Router();

router.post('/api/sales', crearVenta);          // Crear venta
router.get('/api/sales', obtenerVentas);        // Obtener todas
router.get('/api/sales/:id', obtenerVentas);    // Obtener una por ID

export default router;

