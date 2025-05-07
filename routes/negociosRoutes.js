import express from 'express';
import {
    crearNegocio,
    getNegociosByUbicacion
} from '../controllers/negociosController.js';

const router = express.Router();

// Rutas para negocios
router.post('/api/negocios', crearNegocio);
router.get('/api/negocios/ubicacion/:ubicacion', getNegociosByUbicacion);

export default router;