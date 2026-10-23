import { atividades } from "../models/atividadesModel.js"
import { usuario } from "../models/usuarioModel.js"
import { tratarErro } from "../utils/errorHandle.js"
import { publicFolder } from "../config/multer.js"
import fs from 'node:fs'
import path from "node:path"

export const cadastroAtividade = async (req, res) => {
    const { titulo, descricao, reflexao, auto_avaliacao, conexoes, instituicao, data, categoria } = req.body
    const imagem = req.file ? req.file.filename : null

    if (!titulo || !descricao || !imagem || !reflexao || !auto_avaliacao || !conexoes || !data || !categoria) {
        console.log(titulo, imagem, descricao, data, reflexao, auto_avaliacao, categoria)
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos!"})
    }

    try {
        const usuarioHost = await usuario.findAll()
        const id_usuario = usuarioHost[0].id
        const novaAtividade = {
            id_usuario,
            titulo,
            descricao,
            imagem,
            reflexao,
            auto_avaliacao,
            conexoes,
            instituicao,
            data,
            categoria
        }
        await atividades.create(novaAtividade)

        res.status(201).json({
            statusMessage: "Created",
            atividade: {
                titulo: novaAtividade.titulo,
                descricao: novaAtividade.descricao,
                imagem: novaAtividade.imagem,
                reflexao: novaAtividade.reflexao,
                auto_avaliacao: novaAtividade.auto_avaliacao,
                conexoes: novaAtividade.conexoes,
                instituicao: novaAtividade.instituicao,
                data: novaAtividade.data,
                categoria: novaAtividade.categoria
            }
        })
    } catch (error) {
        console.log(error)
        await tratarErro(error, res)
    }
}

export const listarAtividades = async (req, res) => {
    try {
        const att = await atividades.findAll()
        res.status(200).json(att)
    } catch (error) {
        await tratarErro(error, res)
    }
}

export const removerAtividade = async (req, res) => {
    const { id } = req.params
    if (!id) {
        return res.status(400).json({ message: "Nenhuma atividade selecionada" })
    }
    try {
        const att = await atividades.findByPk(id)
        if (!att) {
            return res.status(404).json({ message: "Atividade não encontrada!" })
        }

        await att.destroy()
        res.status(204).json()
    } catch (error) {
        tratarErro(error, res)
    }
}

export const getImage = async (req, res) => {
    try {
        const {filename} = req.params
        const caminho = path.join(publicFolder, filename)

        if(!fs.existsSync(caminho)){
            console.log(caminho)
            return res.status(404).json({ message: "Imagem não existe!" })
        }

        console.log(caminho)

        return res.sendFile(caminho)
    } catch (error) {
        res.status(500).json({ message: "Erro ao mandar publicação", error: error.message })
    }
}