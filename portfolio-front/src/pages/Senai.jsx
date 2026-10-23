import "./css-pages/Senai.css";
import { useEffect, useState } from "react";
import { carregarAtividades } from "../utils/rotaGet";
import { url } from "../utils/url.js";
import { limparData } from "../utils/limparData.js";

const SenaiCard = ({ objeto }) => {
  const [imagem, setImagem] = useState(false);
  const [card, setCard] = useState(false);
  const data = limparData(objeto.data)
  const renderizarImagem = () => {
    if (imagem) {
      return (
        <button onClick={() => setImagem(!imagem)} className="box-imagem">
          <img
            className="exp-imagem"
            src={`${url}/usuario/atividades/${objeto.imagem}`}
          />
        </button>
      );
    }
  };

  const renderizarCard = () => {
    if (card) {
      return (
        <>
          <button onClick={() => setCard(!card)} className="box-imagem">
            <div onClick={(e) => e.stopPropagation()} className="exp-card">
              <div className="box-resumo">
                <img
                  className="n-img"
                  src={`${url}/usuario/atividades/${objeto.imagem}`}
                  alt={objeto.titulo}
                />
                <div className="n-box-info">
                  <h1>{objeto.titulo}</h1>
                  <p>{objeto.descricao}</p>
                </div>
              </div>
              <div className="box-detalhes">
                <div>
                  <h1>Reflexão</h1>
                  <p>{objeto.reflexao}</p>
                </div>
                <div>
                  <h1>Autoavaliação</h1>
                  <p>{objeto.auto_avaliacao}</p>
                </div>
              </div>
            </div>
          </button>
        </>
      );
    }
  };

  return (
    <>
      <button onClick={() => setCard(!card)} className="cards">
        <button
          onClick={(e) => {
            e.stopPropagation();
            setImagem(!imagem);
          }}
        >
          <img src={`${url}/usuario/atividades/${objeto.imagem}`} alt="" />
        </button>
        <div className="titulo-data">
          <h2>{objeto.titulo}</h2>
          <p>{data}</p>
        </div>
        <p className="desc">{objeto.descricao}</p>
      </button>
      {renderizarCard()}
      {renderizarImagem()}
    </>
  );
};

const Senai = () => {
  const [tipo, setTipo] = useState("todas");
  const [atividades, setAtividades] = useState([]);
  const filtrarAtividades = atividades.filter((at) =>
    at.categoria.toLowerCase().includes(tipo.toLowerCase()),
  );

  useEffect(() => {
    carregarAtividades(setAtividades);
  }, []);

  const contar = (filtro) =>
    atividades.filter((at) =>
      at.categoria.toLowerCase().includes(filtro.toLowerCase()),
    );

  const numerosTipos = {
    todas: atividades.length,
    fullstack: contar("fullstack").length,
    backend: contar("backend").length,
    frontend: contar("frontend").length,
  };

  const renderizarCards = () => {
    if (tipo !== "todas") {
      return filtrarAtividades.map((obj) => (
        <SenaiCard key={obj.id} objeto={obj} />
      ));
    }

    return atividades.map((obj) => <SenaiCard key={obj.id} objeto={obj} />);
  };

  return (
    <div className="main-box">
      <div className="intro-project">
        <h1 style={{ color: "white" }}>Atividades & Projetos</h1>
        <p>Atividades e projetos realizados durante o curso.</p>
      </div>
      <hr />
      <div className="category-box">
        <h2>Categorias</h2>
        <div className="inputs-category">
          <div className="btn-opcoes">
            <button onClick={() => setTipo("todas")}>Todas</button>{" "}
            <span>[{numerosTipos.todas}]</span>
          </div>
          <div className="btn-opcoes">
            <button onClick={() => setTipo("fullstack")}>Full-Stack</button>{" "}
            <span>[{numerosTipos.fullstack}]</span>
          </div>
          <div className="btn-opcoes">
            <button onClick={() => setTipo("backend")}>Back-end</button>{" "}
            <span>[{numerosTipos.backend}]</span>
          </div>
          <div className="btn-opcoes">
            <button onClick={() => setTipo("frontend")}>Front-end</button>{" "}
            <span>[{numerosTipos.frontend}]</span>
          </div>
        </div>
      </div>
      <div className="box-cards">{renderizarCards()}</div>
    </div>
  );
};

export default Senai;
