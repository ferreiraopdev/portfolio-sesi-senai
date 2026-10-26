import "./css/Rodape.css"

const Rodape = () => {
  return (
    <footer>
      <div className="box-copyright">
        <h1>MUITO OBRIGADO <br /> PROFESSORES!</h1>
        <p className="recado">Portfólio de usuário único</p>
        <p className="copyright">© 2026 Marcos Ferreira. Todos os direitos reservados</p>
      </div>
      <div className="box-navigation">
        <a href="#me">Sobre mim</a>
        <a href="#senai">Senai</a>
      </div>
    </footer>
  )
}

export default Rodape