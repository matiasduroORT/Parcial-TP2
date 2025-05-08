import Alumno from "../models/Alumno.js"
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

//metodo incompleto, no supe como entrar a la BD conociendo el alumno buscandolo para modificar el nombre
//entre otras cosas que no se manejar.
export const ModificarAlumno = async (req, res) => {  

    // res.json({
    //     reqBody: req.body,
    //     reqParams: req.params,
    //     reqQuery: req.query,
    // })
    const alumnoParaModificar = await getAlumnosById(req.params.id) 
    const { nombre} = req.body;
    if(!nombre || !edad || !email || !password){
        return res.status(400).json({error: "Faltan datos"})
    }

    const alumno = {
        nombre,
    }
      try {
        const nuevoAlumno = await Alumno.modificar(alumno)
        res.status(201).json(nuevoAlumno)
    } catch (error) {
        res.status(500).json({error: "Error al modificar el Alumno"})
    }
    
}
