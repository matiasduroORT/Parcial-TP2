import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    modificarNombre,
    alumnosSinComprar
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.post('/api/alumnos/:id', modificarNombre)
router.get('/api/alumnossincompras', alumnosSinComprar)



export default router