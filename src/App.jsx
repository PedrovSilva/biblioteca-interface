import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import LivroDetalhe from './pages/LivroDetalhe'
import './index.css'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/livros/:id" element={<LivroDetalhe />} />
      </Routes>
    </BrowserRouter>
  )
}