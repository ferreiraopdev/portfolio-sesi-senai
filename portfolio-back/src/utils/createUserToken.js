import jwt from "jsonwebtoken";
import { tratarErro } from "./errorHandle.js";

const senhaToken = "SENHASEGURA"

export const createToken = async (usuario, req, res) => {
    try {
        const token = jwt.sign(
            {
                id: usuario.id,
                nome: usuario.nome,
                email: usuario.email
            },
            senhaToken,
            {
                expiresIn: "12h"
            }
        )

        res.status(200).json({
            sucess: true,
            statusMessage: "OK",
            id_usuario: usuario.id,
            token,
            message: "Você está autenticado"
        })
    } catch (error) {
        tratarErro(error, res)
    }
}