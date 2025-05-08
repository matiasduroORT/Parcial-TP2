import express from 'express';
import {
    getNegocios,
    getNegocioById,
    crearNegocio,
} from '../controllers/negociosController.js'

const router = express.Router()

router.get('/', getNegocios)
router.get('/:id', getNegocioById)
router.post('/', crearNegocio)

export default router