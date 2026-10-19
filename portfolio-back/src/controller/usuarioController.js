import { tratarErro } from "../utils/errorHandle.js"
import { usuario } from "../models/usuarioModel.js"
import { createToken } from "../utils/createUserToken.js"
import bcrypt from "bcrypt"

export const loginUsuario = async (req, res) => {
    const { email, senha } = req.body
    if (!email || !senha) {
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos!"})
    }

    try {
        const usuarioEncontrado = await usuario.scope("comSenha").findOne({
            where: {
                email
            }
        })
        
        if (!usuarioEncontrado) {
            return res.status(400).json({ message: "Credênciais inválidas!" })
        }

        const comparaSenha = bcrypt.compare(senha, usuarioEncontrado.senha)

        if (!comparaSenha) {
            return res.status(400).json({ message: "Credênciais inválidas!" })
        }

        await createToken(usuarioEncontrado, req, res)
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