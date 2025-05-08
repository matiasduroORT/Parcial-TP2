import Alumno from "../models/Alumno.js"
import Sales from '../models/sales.js'
import bcrypt from "bcryptjs";

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
            res.status(404).json({ error: 'Alumno no encontrado'})
        }
    } catch (error) {
        res.status(500).json({ error: "ID Invalido"})
    }

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

export const cambiarNombreAlumno = async(req, res) =>{
    //Primero obtengo el alumno por el ID
    const alumno = await Alumno.findById(req.params.id)

    //Compruebo que exista el alumno.
    if(!alumno){
        return res.status(500).json({error: `No se encontro al alumno con id: ${req.params.id}`})
    }

    //REcibo el nombre desde los querys.
    const nuevoNombre = req.query.nombre;

    //compruebo que no sea un falsy.
    if(!nuevoNombre) {
        return res.status(500).json({error: "Debe ingresar un nombre."})
    }

    //Intento realizar un update del alumno.
    try {
        //Uso el Id del alumno y paso el nuevo nombre para que realice la actualización.
        const updateAlumno = await Alumno.findOneAndUpdate({_id: req.params.id}, { $set: {nombre: nuevoNombre}})
        res.status(200).json(updateAlumno);

    } catch (error) {
        //Si no funciona lanzo un error.
        res.status(500).json({error: "No se pudo actualizar el nombre del alumno."})
    }
}


export const alumnosSinCompras = async(req, res) => {
    
    try {

        
        const ventas = await Sales.find();
        const listaDeAlumnos = await Alumno.find((alumno) => ventas.forEach(venta => {
            if(alumno.id == venta.idComprador){
                return alumno;
            }
        }));

         res.status(200).json(listaDeAlumnos);

    } catch (error) {
        res.sttus(500).json({error: "Ocurrio un error al cargar los alumnos."})
    }
    //Primero obtengo los alumnos
    
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