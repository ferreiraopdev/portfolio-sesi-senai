import "./models/index.js"
import { conn } from "./config/conn.js";
import app from './app.js'

const PORT = 3333

const runningServer = async () => {
    try {
        await conn.sync()
        app.listen(PORT, () => {
            console.log(`Server running on: http://localhost:${PORT}`)
        })
        
    } catch (error) {
        console.log("Erro inesperado: ", error)
    }
}

await runningServer()