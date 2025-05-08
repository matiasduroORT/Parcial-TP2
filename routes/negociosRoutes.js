import express from "express";
import { crearNegocio, obtenerNegocios} from "../controllers/negociosController.js";

const router = express.Router();

router.post("/api/negocios", crearNegocio);
router.get("/api/negocios", obtenerNegocios);

export default router;