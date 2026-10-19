import './App.css'
import Senai from './pages/Senai'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'
import Login from './pages/Login'
import Usuario from './pages/Usuario'
import Atividades from './pages/Atividades'

function App() {
  const hasToken = Boolean(localStorage.getItem('token'))
  return (
    <>
      <Routes>
        <Route path='/senai' element={<Senai />} />
        <Route path='/' element={<Index />} />
        <Route path='/login' element={<Login />} />
        <Route path='/usuario' element={<Usuario hasToken={hasToken} />} />
        <Route path='/usuario/atividades' element={<Atividades hasToken={hasToken} />} />
      </Routes>
    </>
  )
}

export default App
