import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    getAlumnosSinCompras,
    CrearAlumno,
    EditarNombreDeAlumnoById
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/sinCompras', getAlumnosSinCompras)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.patch('/api/alumnos/:id', EditarNombreDeAlumnoById)




export default router