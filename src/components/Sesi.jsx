import "./css/Sesi.css"

const Sesi = () => {
  return (
    <article className="sesi-box">
        <h1 id="sesi">SESI</h1>
        <div className="carrossel">
            <img className="card" src="./../../images.jpeg" alt="" />
            <img className="card" src="./../../images.jpeg" alt="" />
            <img className="card" src="./../../images.jpeg" alt="" />
            <img className="card" src="./../../images.jpeg" alt="" />
        </div>
        <div className="align-button">
            <button>Detalhes</button>
        </div>
    </article>
  )
}

export default Sesi