import './App.css'
import Senai from './pages/Senai'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Atividades from './pages/Atividades'

function App() {
  return (
    <>
      <Routes>
        <Route path='/senai' element={<Senai />} />
        <Route path='/' element={<Index />} />
        <Route path='/usuario/login' element={<Login />} />
        <Route path='/usuario' element={<Usuario />} />
        <Route path='/usuario/atividades' element={<Atividades />} />
      </Routes>
    </>
  )
}

export default App
