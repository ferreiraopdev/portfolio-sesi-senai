import { url } from "./url.js"

export const carregarAtividades = async (armazenarAtt) => {
    try {
        const res = await fetch(`${url}/usuario/atividades`)
        if (!res.ok) {
            const mensagemErro = await res.json()
            throw new Error(`${mensagemErro.message}`)
        }
        const data = await res.json()
        armazenarAtt(data)
    } catch (error) {
        console.log(error.message)
    }
}

export const carregarUsuario = async (armazenarUsuario) => {
    try {
        const res = await fetch(`${url}/usuario`)
        if (!res.ok) {
            const mensagemErro = await res.json()
            throw new Error(`${mensagemErro.message}`)
        }
        const data = await res.json()
        armazenarUsuario(data)
    } catch (error) {
        console.log(error.message)
    }
}

export const carregarPessoal = async (armazenarPessoal) => {
    try {
        const res = await fetch(`${url}/usuario/pessoal`)
        if (!res.ok) {
            const mensagemErro = await res.json()
            throw new Error(`${mensagemErro.message}`)
        }
        const data = await res.json()
        armazenarPessoal(data)
    } catch (error) {
        console.log(error.message)
    }
}