import { Router } from "express";
import BebidasController from "../controllers/BebidasController.js";

const router = Router();
const bebidas = new BebidasController();

router.post("/criarTabela", bebidas.criarTabela);

router.get("/bebidasBuscar", bebidas.buscarTodasBebidas);

router.post("/bebidasSalvar", bebidas.salvarBebidas);

router.get("/bebidasBuscar/:id", bebidas.buscarPorID);

router.put("/atualizar/:id", bebidas.atualizarBebida);

router.delete("/deletar/:id", bebidas.deletarBebida);
export default router;
