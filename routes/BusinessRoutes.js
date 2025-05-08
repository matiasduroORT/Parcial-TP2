import express from 'express';
import { crearNegocio, obtenerNegociosPorUbicacion } from '../controllers/BusinessController.js';

const router = express.Router();

router.post('/api/businesses', crearNegocio);

router.get('/api/businesses', obtenerNegociosPorUbicacion);

export default router;
