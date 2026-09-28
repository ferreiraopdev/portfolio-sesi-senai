import "./css/SobreMim.css"

const SobreMim = () => {
    return (
        <article className="box-sobre-mim">
            <div className="sobre-mim">
                <h1 id="me">Quem sou eu?</h1>
                <p>Olá professores de ambas instituições, meu nome é Marcos Ferreira Alves, tenho 18 anos, estou concluindo o EM com curso técnico em informática (Desenvolvimento WEB)</p>
            </div>
            <div className="meu-perfil">
                <img className="mouse" src="./../../../mouse.png" alt="cat" />
                <img className="minha-pessoa" src="./../../../309555591.jpg" alt="me" />
            </div>
        </article>
    )
}

export default SobreMim