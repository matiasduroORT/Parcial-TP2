import express from 'express';
import {
    crearVenta,
    obtenerVentas,
    obtenerVentasPorId
} from '../controllers/salesController.js'

const ruta = express.Router();

ruta.get('/api/sales', obtenerVentas);
ruta.get('/api/sales/:id', obtenerVentasPorId);
ruta.post('/api/sales/crear/:id', crearVenta);


export default ruta;
