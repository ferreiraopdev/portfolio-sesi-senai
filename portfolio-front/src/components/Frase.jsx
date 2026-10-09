import { useEffect, useState } from "react"
import "./css/Frase.css"

const Frase = () => {
    const [letra, setLetra] = useState("")
    let frase = "Thhe biggest risk is not taking any risk. In a world that's changing really quickly, the only strategy that is guaranteed to fail is not taking risks."
    let separarFrase = frase.split("")

    useEffect(() => {
        let i = 0

        const escrever = () => {
            setLetra(letra => letra + separarFrase[i])
            i++
            if (i < (separarFrase.length - 1)) {
                setTimeout(escrever, 50)
            }
        }

        escrever()
    }, [])

    return (
        <article className="frase-impacto-box">
            <p>{letra}</p>
        </article>
    )
}

export default Frase