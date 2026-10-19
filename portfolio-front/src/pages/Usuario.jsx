import { Link, useNavigate } from "react-router-dom"
import "./css-pages/Usuario.css"

const Usuario = ({ hasToken }) => {
  const navigate = useNavigate()

  const renderizarComponentes = () => {
    if (hasToken) {
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
    } else {
      navigate("/")
    }
  }
  return (
    <>
      {renderizarComponentes()}
    </>
  )
}

export default Usuario