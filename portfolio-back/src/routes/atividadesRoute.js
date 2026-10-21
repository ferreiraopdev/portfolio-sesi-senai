import {
    cadastroAtividade,
    listarAtividades
} from "./../controller/atividadesController.js";

import { Router } from "express";

import { upload } from '../config/multer.js'
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router()

router.post("/", upload.single("imagem"), verifyToken, cadastroAtividade)
router.get("/", upload.single("imagem"), listarAtividades)

export default router;