import { useEffect, useState } from 'react'
import { cadastrarLivro, listarGeneros } from '../api'

export default function LivroFormModal({ onClose }) {
  const [generos, setGeneros] = useState([])
  const [form, setForm] = useState({ titulo: '', autor: '', ano: '', genero: '' })
  const [files, setFiles] = useState({ capa: null, pdf: null })

  useEffect(() => {
    listarGeneros().then(res => setGeneros(res.data))
  }, [])

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value })
  const handleFile = e => setFiles({ ...files, [e.target.name]: e.target.files[0] })

  const handleSubmit = async e => {
    e.preventDefault()
    const data = new FormData()
    Object.entries(form).forEach(([key, value]) => data.append(key, value))
    data.append('capa', files.capa)
    data.append('pdf', files.pdf)
    await cadastrarLivro(data)
    onClose()
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow w-full max-w-md space-y-3">
        <h2 className="text-xl font-semibold">Novo Livro</h2>
        <input name="titulo" placeholder="Título" onChange={handleChange} required className="w-full border px-2 py-1" />
        <input name="autor" placeholder="Autor" onChange={handleChange} required className="w-full border px-2 py-1" />
        <input name="ano" placeholder="Ano" type="number" onChange={handleChange} className="w-full border px-2 py-1" />
        <select name="genero" onChange={handleChange} required className="w-full border px-2 py-1">
          <option value="">Selecione o gênero</option>
          {generos.map(g => <option key={g._id} value={g._id}>{g.nome}</option>)}
        </select>
        <input name="capa" type="file" onChange={handleFile} accept="image/*" required className="w-full" />
        <input name="pdf" type="file" onChange={handleFile} accept="application/pdf" required className="w-full" />
        <div className="flex justify-between">
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">Salvar</button>
          <button type="button" onClick={onClose} className="text-red-600">Cancelar</button>
        </div>
      </form>
    </div>
  )
}
