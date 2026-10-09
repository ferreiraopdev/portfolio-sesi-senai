import { Link } from "react-router-dom"
import "./css-pages/Usuario.css"

const Usuario = () => {
  return (
    <nav className="nav-adm">
        <div className="nav-adm-perfil">
            <img src="./../../309555591.jpg" alt="" />
            <h2>Marcos Ferreira</h2>
        </div>
        <div className="nav-adm-links">
            <Link className="link-adm">Perfil</Link>
            <Link to="/usuario/atividades" className="link-adm">Atividades</Link>
        </div>
    </nav>
  )
}

export default Usuario