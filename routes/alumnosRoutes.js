import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    ModificarNombre,
    getAlumnosSinCompras,
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.put('/api/alumnos/:id', ModificarNombre)
router.get('/api/alumnos/alumnosSinVenta', getAlumnosSinCompras)





export default router