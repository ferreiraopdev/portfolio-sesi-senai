import {
    cadastroAtividade
} from "./../controller/atividadesController.js";

import { Router } from "express";

import { upload } from '../config/multer.js'

const router = Router()

router.post("/", upload.single("imagem"), cadastroAtividade)

export default router;