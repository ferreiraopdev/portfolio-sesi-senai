import { useEffect, useState } from "react";
import "./css/SobreMim.css";
import { carregarUsuario } from "../utils/rotaGet.js";
import { url } from "../utils/url.js";

const SobreMim = () => {
  const [usuario, setUsuario] = useState([]);
  useEffect(() => {
    carregarUsuario(setUsuario);
  }, []);
  return (
    <>
      {usuario.map((u) => (
        <article id={u.id} className="box-sobre-mim">
          <div className="sobre-mim">
            <p className="role">DESENVOLVIMENTO WEB</p>
            <h1 id="me">{u.nome}</h1>
            <h2>{u.cargo}</h2>
            <p>{u.sobre_mim}</p>
          </div>
          <div className="meu-perfil">
            <img
              className="minha-pessoa"
              src={`${url}/usuario/atividades/${u.imagem}`}
              alt={u.nome}
            />
          </div>
        </article>
      ))}
    </>
  );
};

export default SobreMim;