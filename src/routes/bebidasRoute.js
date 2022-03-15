import { Router } from "express";
import BebidasController from "../controllers/BebidasController.js";

const router = Router();
const bebidas = new BebidasController();

router.post("/criarTabela", bebidas.criarTabela);

router.get("/bebidasBuscar", bebidas.buscarTodasBebidas);

router.post("/bebidasSalvar", bebidas.salvarBebidas);

export default router;
