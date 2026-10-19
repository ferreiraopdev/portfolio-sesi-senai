import {
    cadastroAtividade
} from "./../controller/atividadesController.js";

import { Router } from "express";

import { upload } from '../config/multer.js'
import { verifyToken } from "../middleware/verifyToken.js";

const router = Router()

router.post("/", upload.single("imagem"), verifyToken, cadastroAtividade)

export default router;