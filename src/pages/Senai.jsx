import "./css-pages/Senai.css"
import atividades from "./../atividades/senai/atividadesSenai.json"
import { useState } from "react"

const SenaiCard = ({ objeto }) => {
  return (
    <div className="cards">
      <img src={objeto.imagem} alt="" />
      <div className="titulo-data">
        <h2>{objeto.titulo}</h2>
        <p>{objeto.data}</p>
      </div>
      <p className="desc">{objeto.desc}</p>
    </div>
  )
}

const Senai = () => {
  const [tipo, setTipo] = useState("todas")
  const att = atividades
  const filtrarAtividades = att.filter(at => at.tipo.toLowerCase().includes(tipo.toLowerCase()))

  const contar = filtro => att.filter(at => at.tipo.toLowerCase().includes(filtro.toLowerCase()))

  const numerosTipos = {
    todas: att.length,
    fullstack: contar("fullstack").length,
    backend: contar("backend").length,
    frontend: contar("frontend").length
  }

  const renderizarCards = () => {
    if (tipo !== "todas") {
      return (
        filtrarAtividades.map((obj) => (
          <SenaiCard key={obj.id} objeto={obj} />
        ))
      )
    }

    return (
      att.map((obj) => (
        <SenaiCard key={obj.id} objeto={obj} />
      ))
    )
  }

  return (
    <div className="main-box">
      <div className="intro-project">
        <h1 style={{ color: 'white' }}>Atividades & Projetos</h1>
        <p>Atividades e projetos realizados durante o curso.</p>
      </div>
      <hr />
      <div className="category-box">
        <h2>Categorias</h2>
        <div className="inputs-category">
          <div className="btn-opcoes"><button onClick={() => setTipo("todas")}>Todas</button> <span>[{numerosTipos.todas}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("fullstack")}>Full-Stack</button> <span>[{numerosTipos.fullstack}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("backend")}>Back-end</button> <span>[{numerosTipos.backend}]</span></div>
          <div className="btn-opcoes"><button onClick={() => setTipo("frontend")}>Front-end</button> <span>[{numerosTipos.frontend}]</span></div>
        </div>
      </div>
      <div className="box-cards">
        {renderizarCards()}
      </div>
    </div >
  )
}

export default Senai