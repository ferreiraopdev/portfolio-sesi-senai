import { useEffect, useState } from "react";
import "./css-pages/Login.css";
import { url } from "../utils/url.js";
import { useNavigate } from "react-router-dom";
import { carregarAtividades } from "../utils/rotaGet.js";

const Login = () => {
  const navigate = useNavigate()
  const [email, setEmail] = useState("")
  const [senha, setSenha] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const res = await fetch(`${url}/usuario/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          senha
        })
      })

      if (!res.ok) {
        throw new Error(`${res.status} Error`)
      }

      const dados = await res.json()

      localStorage.setItem('token', dados.token)

      navigate("/usuario")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="back-size">
      <form className="formulario-box" onSubmit={handleSubmit} >
        <div className="title-login">
          <h1>Login</h1>
        </div>
        <div className="box-input">
          <div>
            <p>E-Mail</p>
            <input name={email} onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Digite seu email!" id="" />
          </div>
          <div>
            <p>Senha</p>
            <input name={senha} onChange={(e) => setSenha(e.target.value)} type="text" placeholder="Digite sua senha!" id="" />
          </div>
          <button type="submit" >Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
