import express from 'express';
import {
    home,
    getUsuario,
    getUsuariosById,
    CrearUsuario,
    modificarNombreUser,
    getUsuariosSinCompra
} from '../controllers/usuariosController.js'

const router = express.Router()


router.get('/', home); 
router.get('/', getUsuario); 
router.get('/:id', getUsuariosById); 
router.post('/', CrearUsuario); 
router.post('/actualizarNombre/:id', modificarNombreUser); 
router.post('/usuariosSinCompra', getUsuariosSinCompra); 

export default router