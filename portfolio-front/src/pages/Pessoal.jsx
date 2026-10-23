import "./css-pages/Pessoal.css"

const Pessoal = ({ hasToken }) => {
  return (
    <div className="p-box-main">
      <form className="p-content">
        <div>
          <h1>Experiências</h1>
          <textarea rows="4" cols="70" type="text" name="" id="" />
        </div>
        <div>
          <h1>Conhecimentos</h1>
          <textarea rows="4" cols="70" type="text" name="" id="" />
        </div>
        <div>
          <h1>Aprendizado acadêmico</h1>
          <textarea rows="4" cols="70" type="text" name="" id="" />
        </div>
        <div>
          <h1>Melhorias</h1>
          <textarea rows="4" cols="70" type="text" name="" id="" />
        </div>
        <div>
          <h1>Aplicação Prática</h1>
          <textarea rows="4" cols="70" type="text" name="" id="" />
        </div>
        <button type="submit">Enviar</button>
      </form>

      <div className="box-result">
        <div className="pergunta-resposta">
          <h2>
            Como as experiências vividas na escola contribuirão para a vida em
            sociedade.
          </h2>
          <p>experiencias</p>
        </div>
        <div className="pergunta-resposta">
          <h2>
            Como os conhecimentos adquiridos e as situações enfrentadas no
            ambiente escolar auxiliarão na resolução de problemas e na
            convivência com diferentes pessoas.
          </h2>
          <p>conhecimentos</p>
        </div>
        <div className="pergunta-resposta">
          <h2>Em quais pontos ainda precisos melhorar?</h2>
          <p>melhoria</p>
        </div>
        <div className="pergunta-resposta">
          <h2>Como esse conhecimento pode ser aplicado na vida real?</h2>
          <p>Aplicação Prática</p>
        </div>
        <div className="pergunta-resposta">
          <h2>O que aprendeu com as experiências acadêmicas?</h2>
          <p>aprendizado academico</p>
        </div>
      </div>
    </div>
  );
};

export default Pessoal;
