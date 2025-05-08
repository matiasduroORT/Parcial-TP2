import express from "express";
import { crearVenta, obtenerVentas} from "../controllers/ventasController.js";

const router = express.Router();

router.get("/api/ventas", obtenerVentas);
router.post("/api/ventas", crearVenta);

export default router;