import { useState } from "react"
import "./css/Navbar.css"

const ComponenteGatos = () => {
    return (
        <div>
            <img className="cat-surprise" src="./../../../af.gif" alt="" />
        </div>
    )
}

const Navbar = () => {
    const [gatos, setGatos] = useState(false)

    const renderizarGatos = () => {
        if (gatos) {
            return <ComponenteGatos />
        }
        return (
            <div></div>
        )
    }

    return(
        <>
            <nav>
                <button onClick={() => setGatos(!gatos)}><img src="./../../catlogo.png" alt="café" /></button>
                <div className="nav-links">
                    <a href="#sesi">Sesi</a>
                    <a href="#me">Me</a>
                    <a href="#senai">Senai</a>
                </div>
                <a target="_blank" href="https://github.com/ferreiraopdev"><img src="./../../githublogo.png" alt="github" /></a>
            </nav>
            {renderizarGatos()}
        </>
    )
}

export default Navbar