import express from 'express';
import {
    CreateNegocio,
    getNegocios,
} from '../controllers/negociosController.js'

const router = express.Router()


//TO-DO:
router.post('/api/negocios', CreateNegocio)
router.get('/api/negocios/:id', getNegocios)




export default router