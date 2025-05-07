import Alumno from "../models/Alumno.js";
import Venta from "../models/Venta.js";
    
export const getAlumnosSinCompras = async (req, res) => {
  try {
    const alumnos = await Alumno.find();
    
    const ventas = await Venta.find();
    
    const alumnosConCompras = new Set();
    ventas.forEach(venta => {
      alumnosConCompras.add(venta.alumno.toString());
    });
    
    const alumnosSinCompras = alumnos.filter(alumno =>
      !alumnosConCompras.has(alumno._id.toString())
    );
    
    res.json(alumnosSinCompras);
  } catch (error) {
    console.error("Error al obtener alumnos sin compras:", error);
    res.status(500).json({ error: "Error al obtener alumnos sin compras" });
  }
};

export const actualizarNombreAlumno = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;

  if (!nombre) {
    return res.status(400).json({ error: "El nombre es requerido" });
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
    console.error("Error al actualizar nombre del alumno:", error);
    res.status(500).json({ error: "Error al actualizar el nombre del alumno" });
  }
};
