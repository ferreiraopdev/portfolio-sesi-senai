import {
    loginUsuario,
    criarUsuario
} from "./../controller/usuarioController.js";

import { Router } from "express";

const router = Router()

router.post("/login", loginUsuario)
router.post("/hashhashhash", criarUsuario)

export default router;