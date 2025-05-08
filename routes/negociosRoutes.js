import express from 'express';
import {
    home,
    getNegociosByStoreLocation,
    CrearNegocio,
} from '../controllers/negociosController.js'

const router = express.Router()


router.get('/', home); 
router.get('/:storeLocation', getNegociosByStoreLocation); 
router.post('/', CrearNegocio); 

export default router