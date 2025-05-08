import express from "express";
import {
  home,
  getAlumnos,
  getAlumnosById,
  CrearAlumno,
  CambiarNombrePorId,
  getAlumnosSinCompras,
} from "../controllers/alumnosController.js";

const router = express.Router();

router.get("/", home);
router.get("/api/alumnos", getAlumnos);
router.get("/api/alumnos/:id", getAlumnosById);
router.put("/api/alumnos/:id", CambiarNombrePorId);
router.get("/api/alumnossincompras", getAlumnosSinCompras);
router.post("/api/alumnos", CrearAlumno);

export default router;
