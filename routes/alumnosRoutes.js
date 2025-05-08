import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    ModificarNombreAlumno,
    ObtenerAlumnosSinVentas,
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.put('/api/alumnos/:alumnoId', ModificarNombreAlumno)
router.get('/api/alumnos-sin-ventas', ObtenerAlumnosSinVentas)


export default router