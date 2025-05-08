import express from 'express'

import {
    CrearNegocio,
    ObtenerNegocioPorLocalidad,
} from '../controllers/negocioController.js'

const router = express.Router()

router.post('/api/negocios', CrearNegocio)
router.get('/api/negocios', ObtenerNegocioPorLocalidad)

export default router