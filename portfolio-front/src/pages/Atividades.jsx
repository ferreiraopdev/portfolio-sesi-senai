import { useNavigate } from "react-router-dom";
import "./css-pages/Atividades.css";
import { useEffect, useState } from "react";
import { url } from "../utils/url.js";
import { carregarAtividades } from "../utils/rotaGet.js";

const AddAtividade = ({ token }) => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [imagem, setImagem] = useState(null);
  const [data, setData] = useState("");
  const [autoAvaliacao, setAutoAvaliacao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [reflexao, setReflexao] = useState("");
  const [conexoes, setConexoes] = useState("");

  let temImagem = false;

  if (imagem !== null) {
    temImagem = true;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("titulo", titulo);
    formData.append("descricao", descricao);
    formData.append("imagem", imagem);
    formData.append("data", data);
    formData.append("auto_avaliacao", autoAvaliacao);
    formData.append("categoria", categoria);
    formData.append("reflexao", reflexao);
    formData.append("conexoes", conexoes);

    try {
      const res = await fetch(`${url}/usuario/atividades`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: formData,
      });

      if (!res.ok) {
        const mensagemErro = await res.json();
        throw new Error(`${mensagemErro.message}`);
      }

      window.location.reload()
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="a-content" onSubmit={handleSubmit}>
      <div className="p-info">
        <div className="p-atividade">
          <div className="inp-text">
            <h2>Titulo</h2>
            <input
              name={titulo}
              onChange={(e) => setTitulo(e.target.value)}
              type="text"
              placeholder="digite aqui!"
            />
          </div>
          <div className="inp-text">
            <h2>Descrição</h2>
            <textarea
              name={descricao}
              onChange={(e) => setDescricao(e.target.value)}
              rows="9"
              cols="30"
              placeholder="digite aqui!"
            />
          </div>
        </div>
        <div className="s-atividade-btn">
          <label htmlFor="input-file-imagem">
            {temImagem ? (
              <img
                className="inp-photo"
                src={URL.createObjectURL(imagem)}
                alt=""
              />
            ) : (
              <img className="inp-photo" src="../../sem-imagem.png" alt="" />
            )}
          </label>
          <input
            id="input-file-imagem"
            type="file"
            name={imagem}
            onChange={(e) => setImagem(e.target.files[0])}
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="s-info">
        <div className="p-atividade">
          <div className="inp-text">
            <h2>Data</h2>
            <input
              name={data}
              onChange={(e) => setData(e.target.value)}
              type="date"
              placeholder="digite aqui!"
            />
          </div>
          <div className="inp-text">
            <h2>Auto avaliação</h2>
            <textarea
              name={autoAvaliacao}
              onChange={(e) => setAutoAvaliacao(e.target.value)}
              rows="5"
              cols="30"
              type="text"
              placeholder="digite aqui!"
            />
          </div>
          <div className="inp-text">
            <h2>Categoria</h2>
            <select onChange={(e) => setCategoria(e.target.value)}>
              <option value="*">
                Selecione as opções
              </option>
              <option name="Front-end" value="frontend">
                Front-end
              </option>
              <option name="Back-end" value="backend">
                Back-end
              </option>
              <option name="Full-stack" value="fullstack">
                Full-stack
              </option>
            </select>
          </div>
        </div>
        <div className="s-atividade">
          <div className="inp-text">
            <h2>Reflexão</h2>
            <textarea
              onChange={(e) => setReflexao(e.target.value)}
              name={reflexao}
              rows="5"
              cols="30"
              type="text"
              placeholder="digite aqui!"
            />
          </div>
          <div className="inp-text">
            <h2>Conexões</h2>
            <textarea
              onChange={(e) => setConexoes(e.target.value)}
              name={conexoes}
              rows="5"
              cols="30"
              type="text"
              placeholder="digite aqui!"
            />
          </div>
        </div>
      </div>
      <button className="btn-submit" type="submit">
        Cadastrar
      </button>
    </form>
  );
};

const RmAtividade = () => {
  const [atividades, setAtividades] = useState([]);
  useEffect(() => {
    carregarAtividades(setAtividades);
  }, []);
  const handleRemover = async (e, id) => {
    e.preventDefault()
    try {
      const res = await fetch(`${url}/usuario/atividades/${id}`, {
        method: "DELETE"
      });

      if (!res.ok) {
        throw new Error(`${res.status}`)
      }

      window.location.reload()
    } catch (error) {
        console.log(error)
    }
  };
  return (
    <>
      {atividades.map((att) => (
        <form
          onSubmit={(e) => handleRemover(e, att.id)}
          className="box-rm-att"
          key={att.id}
        >
          <div className="rm-photo-title">
            <div className="rm-box-photo">
              <img
                src={`${url}/usuario/atividades/${att.imagem}`}
                alt={att.titulo}
              />
            </div>
            <h1>{att.titulo}</h1>
          </div>
          <button type="submit">Remover</button>
        </form>
      ))}
    </>
  );
};

const Atividades = ({ hasToken }) => {
  const navigate = useNavigate();
  const carregarComponentes = () => {
    if (Boolean(hasToken)) {
      return (
        <div className="a-box-main">
          <AddAtividade token={hasToken} />
          <RmAtividade />
        </div>
      );
    } else {
      navigate("/");
    }
  };
  return <>{carregarComponentes()}</>;
};

export default Atividades;
