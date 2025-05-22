import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { obterLivro, baixarPdf } from '../api'

export default function LivroDetalhe() {
  const { id } = useParams()
  const [livro, setLivro] = useState(null)

  useEffect(() => {
    obterLivro(id).then(res => setLivro(res.data))
  }, [id])

  const handleDownload = async () => {
    const res = await baixarPdf(id)
    const url = window.URL.createObjectURL(new Blob([res.data], { type: 'application/pdf' }))
    const link = document.createElement('a')
    link.href = url
    link.setAttribute('download', `${livro.titulo}.pdf`)
    document.body.appendChild(link)
    link.click()
  }

  if (!livro) return <p className="p-4">Carregando...</p>

  return (
    <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4">
      <img
        src={`data:image/jpeg;base64,${livro.capa}`}
        alt={livro.titulo}
        className="w-full h-auto rounded shadow"
      />
      <div>
        <h1 className="text-3xl font-bold mb-2">{livro.titulo}</h1>
        <p className="text-lg mb-1"><strong>Autor:</strong> {livro.autor}</p>
        <p className="text-lg mb-4"><strong>Ano:</strong> {livro.ano}</p>
        <button
          onClick={handleDownload}
          className="bg-green-600 text-white px-4 py-2 rounded shadow"
        >
          Baixar PDF
        </button>
      </div>
    </div>
  )
}