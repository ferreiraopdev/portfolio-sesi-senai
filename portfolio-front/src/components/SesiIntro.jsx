import { Link } from "react-router-dom"
import atividades from "./../atividades/sesi/atividadesSesi.json"
import "./css/SesiIntro.css"

const CardSesi = ({ objeto }) => {
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

const SesiIntro = () => {
  const att = atividades
  const duasAtt = att.slice(0, 2)

  return (
    <article className="inc-box">
      <h1 id="sesi">SESI</h1>
      <div className="inc-cards">
        {
          duasAtt.map((obj) => (
            <CardSesi id={obj.id} objeto={obj} />
          ))
        }
        <Link to="/sesi" className="card more-att">
          <h1>{att.length - 2}+</h1>
          <p>Visualizar mais atividades</p>
        </Link>
      </div>
    </article>
  )
}

export default SesiIntro