import {
    cadastrarPessoal,
    mostrarPessoal,
    atualizarPessoal
} from "../controller/pessoalController.js";

import { Router } from "express";

const router = Router()

router.post("/", cadastrarPessoal);
router.get("/", mostrarPessoal);
router.put("/", atualizarPessoal);

export default router;