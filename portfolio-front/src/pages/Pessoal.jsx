import { useState } from "react";
import "./css-pages/Pessoal.css"
import { url } from "../utils/url.js";

const Pessoal = ({ hasToken }) => {
  const [experiencias, setExperiencias] = useState("")
  const [conhecimentos, setConhecimentos] = useState("")
  const [aprendizado, setAprendizado] = useState("")
  const [melhorias, setMelhorias] = useState("")
  const [aplicacao, setAplicacao] = useState("")

  
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const formPessoal = new FormPessoal()
      formPessoal.append("experiencias", experiencias)
      formPessoal.append("conhecimentos", conhecimentos)
      formPessoal.append("aprendizado", aprendizado)
      formPessoal.append("melhorias", melhorias)
      formPessoal.append("aplicacao", aplicacao)

      const res = await fetch(`${url}/usuario/pessoal`, {
        headers: {
          "Authorization": `Bearer ${hasToken}`
        },
        method: "POST",
        body: formPessoal
      })

      if (!res.ok) {
        throw new Error(`${res.status}`)
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="p-box-main">
      <form onSubmit={handleSubmit} className="p-content">
        <div>
          <h1>Experiências</h1>
          <textarea onChange={(e) => setExperiencias(e.target.value)} rows="4" cols="70" type="text" />
        </div>
        <div>
          <h1>Conhecimentos</h1>
          <textarea onChange={(e) => setConhecimentos(e.target.value)} rows="4" cols="70" type="text" />
        </div>
        <div>
          <h1>Aprendizado acadêmico</h1>
          <textarea onChange={(e) => setAprendizado(e.target.value)} rows="4" cols="70" type="text" />
        </div>
        <div>
          <h1>Melhorias</h1>
          <textarea onChange={(e) => setMelhorias(e.target.value)} rows="4" cols="70" type="text" />
        </div>
        <div>
          <h1>Aplicação Prática</h1>
          <textarea onChange={(e) => setAplicacao(e.target.value)} rows="4" cols="70" type="text" />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div className="box-result">
        <div className="pergunta-resposta">
          <h2>
            Como as experiências vividas na escola contribuirão para a vida em
            sociedade.
          </h2>
          <p>{(experiencias.length !== 0) ? experiencias : "Digite aqui as suas experiências"}</p>
        </div>
        <div className="pergunta-resposta">
          <h2>
            Como os conhecimentos adquiridos e as situações enfrentadas no
            ambiente escolar auxiliarão na resolução de problemas e na
            convivência com diferentes pessoas.
          </h2>
          <p>{(conhecimentos.length !== 0) ? conhecimentos : "Digite aqui os seus conhecimentos"}</p>
        </div>
        <div className="pergunta-resposta">
          <h2>O que aprendeu com as experiências acadêmicas?</h2>
          <p>{(aprendizado.length !== 0) ? aprendizado : "Digite aqui seus aprendizados"}</p>
        </div>
        <div className="pergunta-resposta">
          <h2>Em quais pontos ainda precisos melhorar?</h2>
          <p>{(melhorias.length !== 0) ? melhorias : "Digite aqui as suas melhorias"}</p>
        </div>
        <div className="pergunta-resposta">
          <h2>Como esse conhecimento pode ser aplicado na vida real?</h2>
          <p>{(aplicacao.length !== 0) ? aplicacao : "Digite aqui as suas aplicações"}</p>
        </div>
      </div>
    </div>
  );
};

export default Pessoal;
