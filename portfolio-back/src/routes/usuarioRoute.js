import {
    loginUsuario,
    mostrarUsuario
} from "./../controller/usuarioController.js";

import { Router } from "express";

const router = Router()

router.post("/login", loginUsuario)
router.get("/", mostrarUsuario)

export default router;