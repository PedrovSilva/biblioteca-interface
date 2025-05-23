import { useEffect, useState } from 'react'
import { listarLivros } from '../api'
import { useNavigate } from 'react-router-dom'
import LivroFormModal from '../components/LivroFormModal'

export default function Home() {
  const [livros, setLivros] = useState([])
  const [modalAberto, setModalAberto] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    listarLivros().then(res => setLivros(Array.isArray(res.data) ? res.data : res.data.livros || []))
  }, [modalAberto])

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Catálogo de Livros</h1>
        <button
          className="text-white bg-blue-600 px-3 py-1 rounded-full text-xl"
          onClick={() => setModalAberto(true)}
        >
          +
        </button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {livros.map(livro => (
          <div
            key={livro._id}
            className="cursor-pointer border rounded shadow flex flex-col items-center p-2 hover:shadow-lg transition"
            onClick={() => navigate(`/livros/${livro._id}`)}
          >
            <img
              src={`data:image/jpeg;base64,${livro.capa}`}
              alt={livro.titulo}
              className="w-full h-64 object-cover mb-2 rounded"
            />
            <h2 className="text-center font-medium text-sm line-clamp-2">{livro.titulo}</h2>
          </div>
        ))}
      </div>
      {modalAberto && <LivroFormModal onClose={() => setModalAberto(false)} />}
    </div>
  )
}