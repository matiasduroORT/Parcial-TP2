import express from 'express';
import dotenv from 'dotenv';
import alumnosRouter from './routes/alumnosRoutes.js';
import ventasRouter from './routes/ventasRoutes.js';
import negociosRouter from './routes/negociosRoutes.js';
import conectarDB from './config/db.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Conexión a la base de datos
conectarDB();

// Middleware
app.use(express.json()); // Para que pueda leer JSON

// Rutas
app.use("/", alumnosRouter); // Rutas para alumnos
app.use("/", ventasRouter); // Rutas para ventas
app.use("/", negociosRouter); // Rutas para negocios


// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});