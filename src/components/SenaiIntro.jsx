import { Link } from "react-router-dom"
import "./css/SenaiIntro.css"

const SenaiIntro = () => {
  return (
    <article className="inc-box">
      <h1 id="senai">SENAI</h1>
      <div className="inc-cards">
        <div className="card card-att">
          <div className="align-img">
            <img src="./../../senai-pics/portal-jes.png" alt="" />
          </div>
          <div className="intro-att">
            <h2>Portal JES</h2>
            <p>2026 Set 11</p>
          </div>
          <div className="align-desc">
            <p className="desc">Projeto realizado como AD para o dia dos jogos escolares da escola.</p>
          </div>
        </div>
        <div className="card card-att">
          <div className="align-img">
            <img src="./../../senai-pics/02-usuarios.png" alt="" />
          </div>
          <div className="intro-att">
            <h2>02 Usuários</h2>
            <p>2026 Ago 14</p>
          </div>
          <div className="align-desc">
            <p className="desc">Atividade realizada em sala com o Carlos Wilton | CRUD, Express, Sequelize, JWT, Vitest, SQL</p>
          </div>
        </div>
        <Link to="/senai" className="card more-att">
          <h1>+5</h1>
          <p>Visualizar mais atividades</p>
        </Link>
      </div>
    </article>
  )
}

export default SenaiIntro