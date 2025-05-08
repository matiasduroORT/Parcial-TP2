import Alumno from "../models/Alumno.js"
import Venta from "../models/Venta.js"
import bcrypt from "bcryptjs";
import mongoose from 'mongoose';

export const home = (req, res) => {
    res.send(`<h1>Home de la API</h1>`)
}

export const getAlumnos = async (req, res) => {
    try {
        const alumnos = await Alumno.find()
        res.json(alumnos)
    } catch (error) {
        res.status(500).json({error: "Error al obtener alumnos"})
    }
}

export const getAlumnosById = async (req, res) => {

    try {
        const alumno = await Alumno.findById(req.params.id)
        if(alumno){
            res.json(alumno)
        }else{
            res.status(404).json({ error: 'Alumno no encontrado', id: req.params.id})
        }
    } catch (error) {
        console.log(error.message);
        res.status(500).json({ error: "ID Invalido"})
    }

}

export const ModificarNombreAlumno = async (req, res) => {
    const { nombre } = req.body;
    const alumnoId = req.params.alumnoId
    console.log(nombre);
    try {
        console.log("Modificando alumno con id: " + alumnoId);
        await Alumno.findOneAndUpdate({_id: alumnoId}, {nombre: nombre})
        res.status(200).json({mensaje: "actualizado con exito"})
    } catch (error) {
        res.status(500).json({ error: "Error actualizando nombre."})
    }
}

export const ObtenerAlumnosSinVentas = async (req, res) => {
    let ventas;
    let alumnos;
    
    try {
        ventas = await Venta.find()
        alumnos = await Alumno.find()
    } catch(error) {
        res.status(500).json({error: "Error al obtener data de la DB."})
    }

    const alumnosSinVentas = alumnos.filter(alumno => {
        const venta = ventas.find(venta => venta.idAlumno == alumno.id)
        return venta == null
    })
    res.status(200).json(alumnosSinVentas);
}

export const CrearAlumno = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })

    const { nombre, edad, email, password } = req.body;
    if(!nombre || !edad || !email || !password){
        return res.status(400).json({error: "Faltan datos"})
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // const comparada = await bcrypt.compare(password, hashedPassword)
    
    const alumno = {
        nombre,
        edad,
        email,
        password: hashedPassword
    }

    try {
        const nuevoAlumno = await Alumno.create(alumno)
        res.status(201).json(nuevoAlumno)
    } catch (error) {
        res.status(500).json({error: "Error al crear Alumno"})
    }
    
}

export const agregarPokemon = async (req, res) => {

    // req.query = ??
    // req.params = ??

    const alumno = alumnos.find((alumno) => alumno.id == req.params.id)   
    
    // hacer el fetch a la api de pokemon, segun el id de req.query
    const nombrePokemon = obtenerPokemonNombre('??')

    // alumno.pokemon = 



}

async function obtenerPokemonNombre(id){
    try {

    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    const data = await res.json()
    return data.name
 
} catch (error) {
    console.log("El error fue: ", );
    return null 
}
    
}