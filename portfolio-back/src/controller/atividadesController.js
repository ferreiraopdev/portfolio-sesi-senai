import { atividades } from "../models/atividadesModel.js"
import { tratarErro } from "../utils/errorHandle.js"

export const cadastroAtividade = async (req, res) => {
    const { titulo, descricao, imagem, reflexao, auto_avaliacao, conexoes, instituicao, data, categoria } = req.body

    if (!titulo || !descricao || !imagem || !reflexao || !auto_avaliacao || !conexoes || !instituicao || !data || !categoria) {
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos!"})
    }

    try {
        const novaAtividade = {
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
            statusMessage: "OK",
            novaAtividade
        })
    } catch (error) {
        console.log(error)
        await tratarErro(error, res)
    }
}