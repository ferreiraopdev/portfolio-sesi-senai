import { useEffect, useState } from "react";
import "./css/Experiencia.css";
import { carregarPessoal } from "../utils/rotaGet";

const Experiencia = () => {
  const [pessoal, setPessoal] = useState([]);

  useEffect(() => {
    carregarPessoal(setPessoal);
  }, []);

  const carregarComponentes = () => {
    console.log(pessoal[0])
    if (pessoal !== 0) {
      return (
        <>
            {pessoal.map((p) => (
                <article key={p.id} className="box-experiencia">
                    <div className="left-side">
                        <h1>Reflexão sobre experiências</h1>
                        <p>{p.experiencias}</p>
                    </div>
                    <div className="right-side">
                        <h1>Aplicação dos conhecimentos</h1>
                        <p>{p.conhecimentos}</p>
                    </div>
                    <div className="left-side">
                        <h1>Aprendizado acadêmico</h1>
                        <p>{p.aprendizado_academico}</p>
                    </div>
                    <div className="right-side">
                        <h1>Aplicação prática</h1>
                        <p>{p.aplicacao_pratica}</p>
                    </div>
                    <div className="left-side">
                        <h1>Melhorias necessárias</h1>
                        <p>{p.melhorias}</p>
                    </div>
                </article>
            ))}
        </>
      );
    } else {
      <article className="box-experiencia">
        <div className="left-side">
          <h1>Reflexão sobre experiências</h1>
          <p>Sem reflexão</p>
        </div>
        <div className="right-side">
          <h1>Aplicação dos conhecimentos</h1>
          <p>Sem conhecimentos</p>
        </div>
        <div className="left-side">
          <h1>Aprendizado acadêmico</h1>
          <p>Sem aprendizado acadêmico</p>
        </div>
        <div className="right-side">
          <h1>Aplicação prática</h1>
          <p>Sem aplicação</p>
        </div>
        <div className="left-side">
          <h1>Melhorias necessárias</h1>
          <p>Sem melhorias</p>
        </div>
      </article>;
    }
  };
  return (
    <>
        {carregarComponentes()}
    </>
  );
};

export default Experiencia;
