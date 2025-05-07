import express from 'express';
import {
    home,
    getAlumnos,
    getAlumnosById,
    CrearAlumno,
    crearVenta,
    getVentas,
    getVentaById,
    crearNegocio,
    getNegocios,
    actualizarNombreAlumno,
    getAlumnosSinCompras
} from '../controllers/alumnosController.js'

const router = express.Router()


router.get('/', home)
router.get('/api/alumnos', getAlumnos)
router.get('/api/alumnos/:id', getAlumnosById)
router.post('/api/alumnos', CrearAlumno)
router.patch('/api/alumnos/:id/actualizar-nombre', actualizarNombreAlumno)
router.get('/api/alumnos-sin-compras', getAlumnosSinCompras)

// Rutas para ventas
router.post('/api/alumnos/:alumnoId/ventas', crearVenta)
router.get('/api/ventas', getVentas)
router.get('/api/ventas/:id', getVentaById)

// Rutas para negocios
router.post('/api/negocios', crearNegocio)
router.get('/api/negocios', getNegocios)


export default router