import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    actualizarNombreUsuario,
    alumnosSinCompras,
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.put('/api/alumnos/:id/nombre', actualizarNombreUsuario);
router.get('/api/alumnos/sin-compras', alumnosSinCompras);

export default router