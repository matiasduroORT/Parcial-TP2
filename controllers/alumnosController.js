import Alumno from "../models/Alumno.js";
import Venta from "../models/Venta.js";
import bcrypt from "bcryptjs";

export const home = (req, res) => {
  res.send(`<h1>Home de la API</h1>`);
};

export const getAlumnos = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    res.json(alumnos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener alumnos" });
  }
};

export const getAlumnosById = async (req, res) => {
  try {
    const alumno = await Alumno.findById(req.params.id);
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ error: "Alumno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "ID Invalido" });
  }
};

export const getAlumnosSinCompras = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    const ventas = await Venta.find();

    const alumnosConComprasIds = ventas.map((venta) =>
      venta.alumnoId.toString()
    );

    const alumnosSinCompras = alumnos.filter(
      (alumno) => !alumnosConComprasIds.includes(alumno._id.toString())
    );

    res.json(alumnosSinCompras);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener alumnos" });
  }
};

export const CrearAlumno = async (req, res) => {
  // res.json({
  //     reqBody: req.body,
  //     reqParams: req.params,
  //     reqQuery: req.query,
  // })

  const { nombre, edad, email, password } = req.body;
  if (!nombre || !edad || !email || !password) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  // const comparada = await bcrypt.compare(password, hashedPassword)

  const alumno = {
    nombre,
    edad,
    email,
    password: hashedPassword,
  };

  try {
    const nuevoAlumno = await Alumno.create(alumno);
    res.status(201).json(nuevoAlumno);
  } catch (error) {
    res.status(500).json({ error: "Error al crear Alumno" });
  }
};

export const CambiarNombrePorId = async (req, res) => {
  // res.json({
  //     reqBody: req.body,
  //     reqParams: req.params,
  //     reqQuery: req.query,
  // })

  const { nombre } = req.body;
  if (!nombre) {
    return res.status(400).json({ error: "Faltan datos" });
  }

  try {
    const alumno = await Alumno.findByIdAndUpdate(
      req.params.id,
      { nombre: nombre },
      { new: true }
    );
    if (alumno) {
      res.json(alumno);
    } else {
      res.status(404).json({ error: "Alumno no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ error: "ID Invalido" });
  }
};

export const agregarPokemon = async (req, res) => {
  // req.query = ??
  // req.params = ??

  const alumno = alumnos.find((alumno) => alumno.id == req.params.id);

  // hacer el fetch a la api de pokemon, segun el id de req.query
  const nombrePokemon = obtenerPokemonNombre("??");

  // alumno.pokemon =
};

async function obtenerPokemonNombre(id) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    const data = await res.json();
    return data.name;
  } catch (error) {
    console.log("El error fue: ");
    return null;
  }
}
