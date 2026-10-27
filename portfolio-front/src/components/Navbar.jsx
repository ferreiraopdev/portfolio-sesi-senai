import "./css/Navbar.css"

const Navbar = () => {
    return (
        <>
            <nav>
                <button><img src="./../../catlogo.png" alt="café" /></button>
                <div className="nav-links">
                    <a href="#me">Me</a>
                    <a href="#senai">Senai</a>
                </div>
                <a target="_blank" href="https://github.com/ferreiraopdev"><img src="./../../githublogo.png" alt="github" /></a>
            </nav>
        </>
    )
}

export default Navbar