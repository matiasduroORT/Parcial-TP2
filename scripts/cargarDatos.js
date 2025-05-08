import mongoose from "mongoose";
import dotenv from "dotenv";
import Alumno from "../models/Alumno.js";
import Negocio from "../models/Negocio.js";
import Venta from "../models/Venta.js";
import { alumnos } from "../data/alumnos.js";
import { negocios } from "../data/negocios.js";
import { ventas } from "../data/ventas.js";

dotenv.config();

const cargarDatos = async () => {
    try {
        // Conectar a la base de datos
        await mongoose.connect(process.env.MONGODB_URI);
        console.log("Conectado a la base de datos");

        // Limpiar las colecciones existentes
        await Alumno.deleteMany();
        console.log("Colección de alumnos limpiada");

        await Negocio.deleteMany();
        console.log("Colección de negocios limpiada");

        await Venta.deleteMany();
        console.log("Colección de ventas limpiada");

        // Insertar los datos en las colecciones
        await Alumno.insertMany(alumnos);
        console.log("Alumnos cargados correctamente");

        await Negocio.insertMany(negocios);
        console.log("Negocios cargados correctamente");

        await Venta.insertMany(ventas);
        console.log("Ventas cargadas correctamente");

        process.exit();
    } catch (error) {
        console.error("Error al cargar los datos:", error);
        process.exit(1);
    }
};

cargarDatos();