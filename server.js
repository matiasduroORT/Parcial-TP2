// const express = require('express')
import express from 'express';
import dotenv from 'dotenv'
import conectarDB from './config/db.js';
// const alumnosRouter = require('./routes/alumnosRoutes')
import alumnosRouter from './routes/alumnosRoutes.js'
import salesRouter from './routes/SalesRoutes.js'
import businessRoutes from './routes/BusinessRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000;

conectarDB()

console.log("EL PUERTO ES: ", PORT);

app.use(express.json()) // Para que pueda leer JSON

app.use("/", alumnosRouter) // Manejar middlewares, nos permite conectar nuestro server
app.use("/", salesRouter);
app.use("/", businessRoutes);

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})