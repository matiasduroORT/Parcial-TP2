import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    ModificarAlumno,
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.get('/api/alumnos/modificarAlumno/:id', ModificarAlumno)




export default router