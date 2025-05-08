import express from "express";
import {
  home,
  CrearVenta,
  GetVentas,
  GetVentaById,
} from "../controllers/ventasController.js";

const router = express.Router();

router.get("/", home);
router.get("/api/ventas", GetVentas);
router.get("/api/ventas/:id", GetVentaById);
router.post("/api/ventas", CrearVenta);

export default router;
