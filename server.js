import express from 'express';
import dotenv from 'dotenv'
import usuariosRouter from './routes/usuariosRoutes.js';
import negociosRouter from './routes/negociosRoutes.js';
import ventasRouter from './routes/ventasRoutes.js';
import conectarDB from './config/db.js';

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000;

conectarDB()

console.log("EL PUERTO ES: ", PORT);


app.use(express.json()) 

app.use("/api/usuarios", usuariosRouter);
app.use("/api/negocios", negociosRouter);
app.use("/api/ventas", ventasRouter);



app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})