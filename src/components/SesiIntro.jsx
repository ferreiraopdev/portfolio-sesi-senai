import { Link } from "react-router-dom"
import "./css/SesiIntro.css"

const SesiIntro = () => {
  return (
    <article className="inc-box">
      <h1 id="sesi">SESI</h1>
      <div className="inc-cards">
        <div className="card card-att">
          <div className="align-img">
            <img src="./../../images.jpeg" alt="" />
          </div>
          <div className="intro-att">
            <h2>Nome atividade</h2>
            <p>May 2008</p>
          </div>
          <div className="align-desc">
            <p className="desc">Descriação do projeto</p>
          </div>
        </div>
        <div className="card card-att">
          <div className="align-img">
            <img src="./../../images.jpeg" alt="" />
          </div>
          <div className="intro-att">
            <h2>Nome atividade</h2>
            <p>May 2008</p>
          </div>
          <div className="align-desc">
            <p className="desc">Descriação do projeto</p>
          </div>
        </div>
        <Link to="/sesi" className="card more-att">
          <h1>+1</h1>
          <p>Visualizar mais atividades</p>
        </Link>
      </div>
    </article>
  )
}

export default SesiIntro