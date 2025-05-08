import Alumno from "../models/Alumno.js";
import Venta from "../models/Venta.js";
import bcrypt from "bcryptjs";



// Método para obtener todos los alumnos de la base de datos
export const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find(); // Busca todos los alumnos
        res.json(alumnos); // Devuelve los alumnos en formato JSON
    } catch (error) {
        res.status(500).json({ error: "Error al obtener alumnos" }); // Manejo de errores
    }
};

// Método para obtener un alumno por su ID
export const getAlumnosById = async (req, res) => {
    try {
        const alumno = await Alumno.findById(req.params.id); // Busca un alumno por su ID
        if (alumno) {
            res.json(alumno); // Devuelve el alumno si se encuentra
        } else {
            res.status(404).json({ error: "Alumno no encontrado" }); // Si no se encuentra, devuelve un error 404
        }
    } catch (error) {
        res.status(500).json({ error: "ID Inválido" }); 
    }
};

export const CrearAlumno = async (req, res) => {
    const alumnos = Array.isArray(req.body) ? req.body : [req.body]; // Asegurarse de que siempre sea un array

    if (alumnos.length === 0) {
        return res.status(400).json({ error: "Faltan datos o el formato es incorrecto" });
    }

    try {
        const alumnosCreados = await Promise.all(
            alumnos.map(async (alumno) => {
                const { nombre, edad, email, password } = alumno;

                // Validar los campos de cada alumno
                if (!nombre || !edad || !email || !password) {
                    throw new Error("Faltan datos en uno de los alumnos");
                }

                // Hashear la contraseña
                const hashedPassword = await bcrypt.hash(password, 10);

                return await Alumno.create({
                    nombre,
                    edad,
                    email,
                    password: hashedPassword,
                });
            })
        );

        res.status(201).json(alumnosCreados.length === 1 ? alumnosCreados[0] : alumnosCreados); // Devuelve un objeto si es uno, o un array si son varios
    } catch (error) {
        res.status(500).json({ error: error.message || "Error al crear alumnos" });
    }
};

// Método para modificar el nombre de un alumno por su ID
export const modificarNombreAlumno = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    // Validación de datos
    if (!nombre) {
        return res.status(400).json({ error: "Falta el nombre" });
    }

    try {
        const alumno = await Alumno.findByIdAndUpdate(id, { nombre }, { new: true }); // Actualiza el nombre del alumno
        if (alumno) {
            res.json(alumno); // Devuelve el alumno actualizado
        } else {
            res.status(404).json({ error: "Alumno no encontrado" }); // Si no se encuentra, devuelve un error 404
        }
    } catch (error) {
        res.status(500).json({ error: "Error al modificar el nombre" }); // Manejo de errores
    }
};


import mongoose from "mongoose";


export const obtenerAlumnosSinCompras = async (req, res) => {
    try {
        // Obtener los IDs de los usuarios que han realizado compras
        const ventas = await Venta.find().select("usuarioId");
        const alumnosConCompras = ventas.map((venta) => mongoose.Types.ObjectId(venta.usuarioId)); // Asegúrate de que sean ObjectId

        // Buscar alumnos cuyos IDs no estén en la lista de alumnos con compras
        const alumnosSinCompras = await Alumno.find({
            _id: { $nin: alumnosConCompras },
        });

        res.status(200).json(alumnosSinCompras);
    } catch (error) {
        console.error("Error al obtener alumnos sin compras:", error);
        res.status(500).json({ error: "Error al obtener alumnos sin compras" });
    }
};