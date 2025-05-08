import express from 'express';
import {
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    modificarNombreAlumno,
    obtenerAlumnosSinCompras,
} from '../controllers/alumnosController.js';

const router = express.Router();

// Rutas para alumnos
router.get('/api/alumnos', getAlumnos); // Obtener todos los alumnos
router.get('/api/alumnos/sin-compras', obtenerAlumnosSinCompras); // Obtener alumnos que no han realizado compras
router.get('/api/alumnos/:id', getAlumnosById); // Obtener un alumno por su ID
router.post('/api/alumnos', CrearAlumno); // Crear uno o varios alumnos
router.put('/api/alumnos/:id', modificarNombreAlumno); // Modificar el nombre de un alumno por su ID

export default router;