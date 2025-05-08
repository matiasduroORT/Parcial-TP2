import express from 'express';
import {
  actualizarNombreAlumno,
  getAlumnosSinCompras,
} from '../controllers/alumnosController.js';

const router = express.Router();

router.put('/api/alumnos/:id', actualizarNombreAlumno);
router.get('/api/alumnos-sin-compras', getAlumnosSinCompras);


export default router;