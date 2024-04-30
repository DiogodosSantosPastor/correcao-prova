
import './App.css'
import Evento from './components/Evento.jsx'
import Galeria from './components/Galeria.jsx'
import Cabecalho from './components/Cabecalho.jsx'
import Rodape from './components/Rodape.jsx'


function App() {
  return (
    <>
    <Cabecalho/>
    <Evento
    titulo={"Evento do SENAI"}
    descricao={"Descrição do evento"}
    horario={"29/09/2024 ás 11 horas"}
    local={"Pintopolis MG"}
    />
    <Galeria />
    <Rodape />
    </>
  )
}

export default App
