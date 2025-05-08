import express from 'express'
import {crearVentaParticular, getVentas, getVentasById} from '../controllers/ventasController.js'

const router = express()


router.get("/", getVentas);
router.get("/ventas/:idAlumno", getVentasById);
router.post("/venta/:idAlumno", crearVentaParticular);

export default router;