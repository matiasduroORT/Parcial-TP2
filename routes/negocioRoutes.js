import express from 'express';
import {
    crearNegocio
} from '../controllers/negocioController.js';

const ruta = express.Router();

ruta.post('/api/negocios/crear', crearNegocio);

export default ruta;