import "./css-pages/Senai.css"
import atividades from "./../atividades/sesi/atividadesSesi.json"
import { useState } from "react"

const SesiCard = ({ objeto }) => {
  const [imagem, setImagem] = useState(false)
  const [card, setCard] = useState(false)
  const renderizarImagem = () => {
    if (imagem) {
      return (
        <button onClick={() => setImagem(!imagem)} className="box-imagem">
          <img className="exp-imagem" src={objeto.imagem} />
        </button>
      )
    }
  }

  const renderizarCard = () => {
    if (card) {
      return (
        <>
          <button onClick={() => setCard(!card)} className="box-imagem">
            <div onClick={(e) => e.stopPropagation()} className="exp-card">
              <div className="box-resumo">
                  <img className="n-img" src={objeto.imagem} alt="" />
                <div className="n-box-info">
                  <h1>{objeto.titulo}</h1>
                  <p>{objeto.desc}</p>
                </div>
              </div>
              <div className="box-detalhes">
                <div>
                  <h1>Reflexão</h1>
                  <p>a</p>
                </div>
                <div>
                  <h1>Autoavaliação</h1>
                  <p>b</p>
                </div>
              </div>
            </div>
          </button>
        </>
      )
    }
  }

  return (
    <>
      <button onClick={() => setCard(!card)} className="cards">
        <button onClick={(e) => {e.stopPropagation(); setImagem(!imagem)}}><img src={objeto.imagem} alt="" /></button>
        <div className="titulo-data">
          <h2>{objeto.titulo}</h2>
          <p>{objeto.data}</p>
        </div>
        <p className="desc">{objeto.desc}</p>
      </button>
      {renderizarCard()}
      {renderizarImagem()}
    </>
  )
}

const Sesi = () => {
  const [tipo, setTipo] = useState("todas")
  const att = atividades
  const filtrarAtividades = att.filter(at => at.tipo.toLowerCase().includes(tipo.toLowerCase()))

  const contar = filtro => att.filter(at => at.tipo.toLowerCase().includes(filtro.toLowerCase()))

  const numerosTipos = {
    todas: att.length,
    matematica: contar("matematica").length,
    natureza: contar("natureza").length,
    humanas: contar("humanas").length,
    linguagens: contar("linguagens").length
  }

  const renderizarCards = () => {
    if (tipo !== "todas") {
      return (
        filtrarAtividades.map((obj) => (
          <SesiCard key={obj.id} objeto={obj} />
        ))
      )
    }

    return (
      att.map((obj) => (
        <SesiCard key={obj.id} objeto={obj} />
      ))
    )
  }

  return (
    <div className="main-box">
      <div className="intro-project">
        <h1 style={{ color: 'white' }}>Atividades & Projetos</h1>
        <p>Atividades e projetos realizados durante o ano.</p>
      </div>
      <hr />
      <div className="category-box">
        <h2>Categorias</h2>
        <div className="inputs-category">
          <div className="btn-opcoes"><button onClick={() => setTipo("todas")}>Todas</button> <span>[{numerosTipos.todas}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("matematica")}>Matemática</button> <span>[{numerosTipos.matematica}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("natureza")}>Natureza</button> <span>[{numerosTipos.natureza}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("humanas")}>Humanas</button> <span>[{numerosTipos.humanas}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("linguagens")}>Linguagens</button> <span>[{numerosTipos.linguagens}]</span></div>
        </div>
      </div>
      <div className="box-cards">
        {renderizarCards()}
      </div>
    </div >
  )
}

export default Sesi