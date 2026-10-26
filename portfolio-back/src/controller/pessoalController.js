import { pessoal } from "../models/index.js"
import { tratarErro } from "../utils/errorHandle.js"
import { usuario } from "../models/usuarioModel.js"

export const cadastrarPessoal = async (req, res) => {
    const { experiencias, conhecimentos, aprendizado, melhorias, aplicacao } = req.body
    if (!experiencias || !conhecimentos || !aprendizado || !melhorias || !aplicacao) {
        return res.status(400).json({ message: "Todos os campos precisam estar preenchidos" })
    }
    try {
        const usuarioHost = await usuario.findAll()
        const id_usuario = usuarioHost[0].id
        const dados = {
            id_usuario,
            experiencias,
            conhecimentos,
            aprendizado_academico: aprendizado,
            melhorias,
            aplicacao_pratica: aplicacao
        }
        const pessoalDados = await pessoal.create(dados)
        res.status(201).json(pessoalDados)
    } catch (error) {
        tratarErro(error, res)
    }
}

export const mostrarPessoal = async (req, res) => {
    try {
        const dadosPessoal = await pessoal.findAll()
        res.status(200).json(dadosPessoal)
    } catch (error) {
        tratarErro(error, res)
    }
}

export const atualizarPessoal = async (req, res) => {
    const { experiencias, conhecimentos, aprendizado, melhorias, aplicacao } = req.body
    if (!experiencias && !conhecimentos && !aprendizado && !melhorias && !aplicacao) {
        return res.status(400).json({ message: "Alguns dos campos precisam estar preenchidos!" })
    }
    try {
        const pessoalPut = await pessoal.findByPk(1)

        const dados = {}


        if (experiencias) {
            dados.experiencias = experiencias
        }
        if (conhecimentos) {
            dados.conhecimentos = conhecimentos
        }
        if (aprendizado) {
            dados.aprendizado_academico = aprendizado
        }
        if (melhorias) {
            dados.melhorias = melhorias
        }
        if (aplicacao) {
            dados.aplicacao_pratica = aplicacao
        }

        await pessoalPut.update(dados)
        res.status(201).json(pessoalPut)
    } catch (error) {
        tratarErro(error, res)
    }
}