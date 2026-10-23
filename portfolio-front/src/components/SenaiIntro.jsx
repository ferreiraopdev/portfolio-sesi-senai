import { Link } from "react-router-dom"
import "./css/SenaiIntro.css"
import { useEffect, useState } from "react"
import { carregarAtividades } from "../utils/rotaGet.js"
import { url } from "../utils/url.js"
import { limparData } from "../utils/limparData.js"

const CardSenai = ({ objeto }) => {
  const data = limparData(objeto.data)
  return (
      <div className="card card-att">
        <div className="align-img">
          <img src={`${url}/usuario/atividades/${objeto.imagem}`} alt={objeto.titulo} />
        </div>
        <div className="intro-att">
          <h2>{objeto.titulo}</h2>
          <p>{data}</p>
        </div>
        <div className="align-desc">
          <p className="desc">{objeto.descricao}</p>
        </div>
      </div>
  )
}

const SenaiIntro = () => {
  const [atividades, setAtividades] = useState([])
  const duasAtt = atividades.slice(0, 2)
  useEffect(() => { carregarAtividades(setAtividades) }, [])
  return (
    <article className="inc-box">
      <h1 id="senai">SENAI</h1>
      <div className="inc-cards">
        {
          duasAtt.map((obj) => (
            <CardSenai id={obj.id} objeto={obj} />
          ))
        }
        <Link to="/senai" className="card more-att">
          <h1>{atividades.length - 2}+</h1>
          <p>Visualizar mais atividades</p>
        </Link>
      </div>
    </article>
  )
}

export default SenaiIntro