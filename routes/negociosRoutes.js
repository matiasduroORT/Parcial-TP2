import express from 'express';
import {
    crearNegocio,
    getNegocios
} from '../controllers/negociosController.js'

const router = express.Router()


router.get('/api/negocios', getNegocios)
router.post('/api/negocios/nuevo', crearNegocio)




export default router