// const express = require('express')
import express from 'express';
import dotenv from 'dotenv'
// const alumnosRouter = require('./routes/alumnosRoutes')
import alumnosRouter from './routes/alumnosRoutes.js'
import conectarDB from './config/db.js';
//importo las rutas correspondientes a las ventas.
import salesRoutes from './routes/salesRoutes.js'
//importo la ruta correspondiente a negocios.
import negociosRoutes from './routes/negocioRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000;

conectarDB()

console.log("EL PUERTO ES: ", PORT);


app.use(express.json()) // Para que pueda leer JSON

app.use("/", alumnosRouter) // Manejar middlewares, nos permite conectar nuestro server
app.use("/", salesRoutes);
app.use("/", negociosRoutes);


app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})