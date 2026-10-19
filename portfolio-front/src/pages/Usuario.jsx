import { Link } from "react-router-dom"
import "./css-pages/Usuario.css"

const Usuario = () => {
  return (
    <div className="u-box-main">
        <div className="box-adm-perfil">
            <img src="./../../309555591.jpg" alt="" />
            <h2>Marcos Ferreira</h2>
        </div>
        <div className="box-adm-links">
            <Link to="/usuario/atividades" className="link-adm">Atividades</Link>
        </div>
    </div>
  )
}

export default Usuario