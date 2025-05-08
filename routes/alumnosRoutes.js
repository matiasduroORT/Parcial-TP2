import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    updateAlumnoNombre,
    getAlumnosSinCompras
} from '../controllers/alumnosController.js'

const router = express.Router()

router.get('/', home)
router.get('/alumnos', getAlumnos)
router.get('/alumnos/:id', getAlumnosById)
router.post('/alumnos', CrearAlumno)
router.patch('/alumnos/:id/nombre', updateAlumnoNombre)
router.get('/alumnos/sin-compras', getAlumnosSinCompras)

export default router