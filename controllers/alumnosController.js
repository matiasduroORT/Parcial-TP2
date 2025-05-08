import Alumno from "../models/Alumno.js"
import Sale from "../models/Sales.js";
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


export const actualizarNombreUsuario = async (req, res) => {
  try {
    const { id } = req.params; 
    const { nombre } = req.body;

    
    const usuarioActualizado = await Alumno.findByIdAndUpdate(
      id, 
      { nombre },  
      { new: true } 
    );

   
    if (!usuarioActualizado) {
      return res.status(404).json({ mensaje: 'Usuario no encontrado' });
    }

    res.json(usuarioActualizado);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al actualizar el nombre', error: error.message });
  }
};

export const alumnosSinCompras = async (req, res) => {
    try {
      const ventas = await Sale.find().select('userId');
      const idsConVenta = ventas.map(venta => venta.userId);
  
      const alumnos = await Alumno.find({
        _id: { $nin: idsConVenta }
      });
  
      if (alumnos.length === 0) {
        return res.status(404).json({ mensaje: 'No se encontraron alumnos sin compras' });
      }

      res.json(alumnos);
    } catch (error) {
      res.status(500).json({ mensaje: 'Error al buscar alumnos sin compras', error: error.message });
    }
};


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