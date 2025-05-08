import express from 'express';
import {
    CrearNegocio,
    filtrarNegocio,

} from '../controllers/negociosController.js'

const router = express.Router()


router.post('/api/negocios', CrearNegocio)
router.post('/api/negocios', filtrarNegocio)


export default router