import { tratarErro } from "../utils/errorHandle.js"
import { usuario } from "../models/usuarioModel.js"

export const loginUsuario = async (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) {
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos!"})
    }

    try {
        if (email !== "admin@email.com" || senha !== "adm123@") {
            return res.status(400).json({ message: "credênciais incorretas!"})
        }
        res.status(201).json({message: 'logado com sucesso!'})
    } catch (error) {
        console.log(error)
        await tratarErro(error, res)
    }
}

export const criarUsuario = async (req, res) => {
    const corpo = req.body

    try {
        await usuario.create(corpo)
        res.status(201).json({message: corpo})
    } catch (error) {
        console.log(error)
        await tratarErro(error, res)
    }
}