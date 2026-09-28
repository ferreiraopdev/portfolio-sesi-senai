import "./css/Navbar.css"

const Navbar = () => {
    return(
        <>
            <nav>
                <img src="./../../cafe.png" alt="café" />
                <div className="nav-links">
                    <a href="#sesi">Sesi</a>
                    <a href="#me">Me</a>
                    <a href="#senai">Senai</a>
                </div>
                <a target="_blank" href="https://github.com/ferreiraopdev"><img src="./../../github.png" alt="github" /></a>
            </nav>
        </>
    )
}

export default Navbar