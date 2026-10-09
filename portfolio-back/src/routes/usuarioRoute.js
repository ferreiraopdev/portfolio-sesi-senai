import {
    loginUsuario
} from "./../controller/usuarioController.js";

import { Router } from "express";

const router = Router()

router.post("/", loginUsuario)

export default router;