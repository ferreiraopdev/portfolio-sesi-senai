import {
    cadastroAtividade
} from "./../controller/atividadesController.js";

import { Router } from "express";

const router = Router()

router.post("/", cadastroAtividade)

export default router;