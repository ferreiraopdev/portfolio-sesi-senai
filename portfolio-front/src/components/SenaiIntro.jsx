import { Link } from "react-router-dom"
import atividades from "./../atividades/senai/atividadesSenai.json"
import "./css/SenaiIntro.css"

const CardSenai = ({ objeto }) => {
  return (
      <div className="card card-att">
        <div className="align-img">
          <img src={objeto.imagem} alt="" />
        </div>
        <div className="intro-att">
          <h2>{objeto.titulo}</h2>
          <p>{objeto.data}</p>
        </div>
        <div className="align-desc">
          <p className="desc">{objeto.desc}</p>
        </div>
      </div>
  )
}

const SenaiIntro = () => {
  const att = atividades
  const duasAtt = att.slice(0, 2)

  console.log(duasAtt)
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