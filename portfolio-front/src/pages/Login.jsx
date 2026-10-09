import "./css-pages/Login.css";

const Login = () => {
  return (
    <div className="back-size">
      <form className="formulario-box">
        <div className="title-login">
          <h1>Login</h1>
        </div>
        <div className="box-input">
          <div>
            <p>E-Mail</p>
            <input type="text" placeholder="Digite seu email!" id="" />
          </div>
          <div>
            <p>Senha</p>
            <input type="text" placeholder="Digite sua senha!" id="" />
          </div>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
