import "./models/index.js"
import { conn } from "./config/conn.js";
import app from './app.js'
import { usuario } from "./models/index.js";

const PORT = 3333

const runningServer = async () => {
    try {
        await conn.sync()
        if ((await usuario.findAll()).length === 0) {
            await usuario.create({
                nome: "Marcos Ferreira",
                email: "admin@email.com",
                senha: "admin123",
                sobre_mim: "Olá professores de ambas instituições, meu nome é Marcos Ferreira Alves, tenho 18 anos, estou concluindo o EM com curso técnico em informática (Desenvolvimento WEB) e pretendo trabalhar na área",
                cargo: "Desenvolvedor Full-stack",
                imagem: "309555591.jpg"
            })
        }
        app.listen(PORT, () => {
            console.log(`Server running on: http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log("Erro inesperado: ", error)
    }
}

await runningServer()