import express from "express";
import {
  home,
  CrearNegocio,
  GetNegocios,
  GetNegociosPorUbicacion,
} from "../controllers/negociosController.js";

const router = express.Router();

router.get("/", home);
router.post("/api/negocios", CrearNegocio);
router.get("/api/negocios", GetNegocios);
router.get("/api/negocios/:storeLocation", GetNegociosPorUbicacion);

export default router;
