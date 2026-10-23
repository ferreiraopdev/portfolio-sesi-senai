import { Link, useNavigate } from "react-router-dom";
import "./css-pages/Usuario.css";
import { url } from "../utils/url.js";
import { useState } from "react";
import { useEffect } from "react";
import { carregarUsuario } from "../utils/rotaGet.js";


const Usuario = ({ hasToken }) => {
  const navigate = useNavigate();
  const [usuario, setUsuario] = useState([]);

  useEffect(() => {
    carregarUsuario(setUsuario);
  }, []);

  const renderizarComponentes = () => {
    if (hasToken) {
      return (
        <>
          {usuario.map((u) => (
            <div className="u-box-main">
              <div className="box-adm-perfil">
                <img src={`${url}/usuario/atividades/${u.imagem}`} alt={u.nome} />
                <h2>{u.nome}</h2>
              </div>
              <div className="box-adm-links">
                <Link to="/usuario/atividades" className="link-adm">
                  Atividades
                </Link>
                <Link to="/usuario/pessoal" className="link-adm">
                  Pessoal
                </Link>
              </div>
            </div>
          ))}
        </>
      );
    } else {
      navigate("/");
    }
  };
  return <>{renderizarComponentes()}</>;
};

export default Usuario;
