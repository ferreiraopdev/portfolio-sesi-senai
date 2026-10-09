import {
    loginUsuario,
    criarUsuario
} from "./../controller/usuarioController.js";

import { Router } from "express";

const router = Router()

router.post("/", loginUsuario)
router.post("/hashhashhash", criarUsuario)

export default router;