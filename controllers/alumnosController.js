import Alumno from "../models/Alumno.js"
import Sales from "../models/Sales.js"
import Store from "../models/Store.js"
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

export const crearVenta = async (req, res) => {
    const { alumnoId } = req.params;
    const { monto, descripcion } = req.body;

    if (!monto || !descripcion) {
        return res.status(400).json({ error: "Faltan datos para la venta" });
    }

    try {
        const alumnoExiste = await Alumno.findById(alumnoId);
        if (!alumnoExiste) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }

        const nuevaVenta = await Sales.create({
            alumnoId,
            monto,
            descripcion
        });

        res.status(201).json(nuevaVenta);
    } catch (error) {
        res.status(500).json({ error: "Error al crear la venta" });
    }
};

export const getVentas = async (req, res) => {
    try {
        const ventas = await Sales.find();
        res.json(ventas);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener las ventas" });
    }
};

export const getVentaById = async (req, res) => {
    try {
        const venta = await Sales.findById(req.params.id);
        if (venta) {
            res.json(venta);
        } else {
            res.status(404).json({ error: "Venta no encontrada" });
        }
    } catch (error) {
        res.status(500).json({ error: "ID de venta inválido" });
    }
};

// Controladores para Stores
export const crearNegocio = async (req, res) => {
    const { nombre, storeLocation, direccion, telefono } = req.body;

    if (!nombre || !storeLocation || !direccion) {
        return res.status(400).json({ error: "Faltan datos obligatorios" });
    }

    try {
        const nuevoNegocio = await Store.create({
            nombre,
            storeLocation,
            direccion,
            telefono
        });

        res.status(201).json(nuevoNegocio);
    } catch (error) {
        res.status(500).json({ error: "Error al crear el negocio" });
    }
};

export const getNegocios = async (req, res) => {
    try {
        const { storeLocation } = req.query;
        
        const filtro = storeLocation ? { storeLocation } : {};
        
        const negocios = await Store.find(filtro);
        res.json(negocios);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los negocios" });
    }
};

//Para filtrar negocios por storeLocation
//http://localhost:3000/api/negocios?storeLocation=Buenos%20Aires

// Actualizar nombre de alumno
export const actualizarNombreAlumno = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;

    if (!nombre) {
        return res.status(400).json({ error: "El nombre es obligatorio" });
    }

    try {
        const alumnoActualizado = await Alumno.findByIdAndUpdate(
            id,
            { nombre },
            { new: true }
        );

        if (!alumnoActualizado) {
            return res.status(404).json({ error: "Alumno no encontrado" });
        }

        res.json(alumnoActualizado);
    } catch (error) {
        res.status(500).json({ error: "Error al actualizar el nombre del alumno" });
    }
};

// Obtener alumnos sin compras
export const getAlumnosSinCompras = async (req, res) => {
    try {
        const alumnos = await Alumno.find();
        
        const ventas = await Sales.find();
        
        const alumnosConCompras = ventas.map(venta => venta.alumnoId.toString());
        
        const alumnosSinCompras = alumnos.filter(alumno => 
            !alumnosConCompras.includes(alumno._id.toString())
        );
        
        res.json(alumnosSinCompras);
    } catch (error) {
        res.status(500).json({ error: "Error al obtener alumnos sin compras" });
    }
};