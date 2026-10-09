import Experiencia from "./Experiencia"
import Frase from "./Frase"
import Navbar from "./Navbar"
import Rodape from "./Rodape"
import SenaiIntro from "./SenaiIntro"
import SesiIntro from "./SesiIntro"
import SobreMim from "./SobreMim"

const Index = () => {
  return (
    <>
      <Navbar />
      <SobreMim />
      <Frase />
      <SenaiIntro />
      <SesiIntro />
      <Experiencia />
      <Rodape />
    </>
  )
}

export default Index