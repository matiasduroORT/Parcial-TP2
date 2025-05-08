// const express = require('express')
import express from 'express';
import dotenv from 'dotenv'
// const alumnosRouter = require('./routes/alumnosRoutes')
import alumnosRouter from './routes/alumnosRoutes.js'
import salesRouter from './routes/salesRoutes.js'
import conectarDB from './config/db.js';
import negocioRouter from './routes/negociosRoutes.js'

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000;

conectarDB()

console.log("EL PUERTO ES: ", PORT);


app.use(express.json()) // Para que pueda leer JSON

app.use("/", alumnosRouter) // Manejar middlewares, nos permite conectar nuestro server
app.use("/", salesRouter)
app.use("/", negocioRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})