import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    cambiarNombreAlumno,
    alumnosSinCompras
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.post('/api/alumnos/cambiarNombre/:id', cambiarNombreAlumno)
router.get('/api/alumnos/sinCompra', alumnosSinCompras)


export default router