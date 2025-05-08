import express from 'express'
import {crearNegocio, negocioPorZona, getNegocios} from '../controllers/negociosController.js'


const router = express.Router();

router.post("/negocios", crearNegocio);
router.get("/negocio/:storeLocation", negocioPorZona);
router.get('/negocios', getNegocios);

export default router;