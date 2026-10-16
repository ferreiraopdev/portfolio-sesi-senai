import { atividades } from "../models/atividadesModel.js"
import { usuario } from "../models/usuarioModel.js"
import { tratarErro } from "../utils/errorHandle.js"

export const cadastroAtividade = async (req, res) => {
    const { titulo, descricao, reflexao, auto_avaliacao, conexoes, instituicao, data, categoria } = req.body
    const imagem = req.file ? req.file.filename : null

    if (!titulo || !descricao || !imagem || !reflexao || !auto_avaliacao || !conexoes || !data || !categoria) {
        console.log(titulo, req.file, descricao, data, reflexao, auto_avaliacao, categoria, conexoes)
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