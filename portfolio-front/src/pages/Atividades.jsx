import "./css-pages/Atividades.css"

const Atividades = () => {
  return (
    <div className="a-box-main">
        <form className="a-content">
            <div className="p-info">
                <div className="p-atividade">
                    <div className="inp-text">
                        <h2>Titulo</h2>
                        <input type="text" placeholder="digite aqui!" />
                    </div>
                    <div className="inp-text">
                        <h2>Descrição</h2>
                        <textarea rows="9" cols="30" placeholder="digite aqui!" />
                    </div>
                </div>
                <div className="s-atividade-btn">
                    <button>
                        <img className="inp-photo" src="../../sem-imagem.png" alt="" />
                    </button>
                </div>
            </div>
            <div className="s-info">
                <div className="p-atividade">
                    <div className="inp-text">
                        <h2>Data</h2>
                        <input type="date" placeholder="digite aqui!" />
                    </div>
                    <div className="inp-text">
                        <h2>Auto avaliação</h2>
                        <textarea rows="5" cols="30" type="text" placeholder="digite aqui!" />
                    </div>
                    <div className="inp-text">
                        <h2>Categoria</h2>
                        <select>
                            <option value="">Front-end</option>
                            <option value="">Back-end</option>
                            <option value="">Full-stack</option>
                        </select>
                    </div>
                </div>
                <div className="s-atividade">
                    <div className="inp-text">
                        <h2>Reflexão</h2>
                        <textarea rows="5" cols="30" type="text" placeholder="digite aqui!" />
                    </div>
                    <div className="inp-text">
                        <h2>Conexões</h2>
                        <textarea rows="5" cols="30" type="text" placeholder="digite aqui!" />
                    </div>
                </div>
            </div>
            <button className="btn-submit" type="submit">Cadastrar</button>
        </form>
    </div>
  )
}

export default Atividades