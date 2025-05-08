import express from 'express';
import dotenv from 'dotenv'
import alumnosRouter from './routes/alumnosRoutes.js'
import salesRouter from './routes/salesRoutes.js'
import storesRouter from './routes/storesRoutes.js'
import conectarDB from './config/db.js';
import cors from 'cors';

dotenv.config()

const app = express()

const PORT = process.env.PORT || 4000;

conectarDB()

console.log("EL PUERTO ES: ", PORT);


app.use(cors())
app.use(express.json()) 


app.get('/', (req, res) => {
  res.send('Servidor funcionando correctamente');
});


app.use("/api", alumnosRouter)
app.use("/api", salesRouter)
app.use("/api", storesRouter)

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`)
})