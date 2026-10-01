import './App.css'
import Senai from './pages/Senai'
import Sesi from './pages/Sesi'
import { Route, Routes } from 'react-router-dom'
import Index from './components/Index'

function App() {
  return (
    <>
      <Routes>
        <Route path='/senai' element={<Senai />} />
        <Route path='/sesi' element={<Sesi />} />
        <Route path='/' element={<Index />} />
      </Routes>
    </>
  )
}

export default App
