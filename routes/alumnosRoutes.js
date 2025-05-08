import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    modificarAlumno,
    getAlumnosSinVentas
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.put("/api/alumnos/:id", modificarAlumno)
router.get("/api/alumnosSinVentas", getAlumnosSinVentas)




export default router