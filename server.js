import express from 'express';
import dotenv from 'dotenv';
import alumnosRouter from './routes/alumnosRoutes.js';
import negociosRouter from './routes/negociosRoutes.js';
import ventasRouter from './routes/ventasRoutes.js'; // Importar las rutas de ventas
import conectarDB from './config/db.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 4000;

// Conectar a la base de datos
conectarDB();

// Middleware para procesar JSON
app.use(express.json());

// Registrar las rutas
app.use("/", alumnosRouter);
app.use("/", negociosRouter);
app.use("/", ventasRouter); // Registrar las rutas de ventas

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});