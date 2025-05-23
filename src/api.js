import axios from 'axios'

const API_BASE = process.env.REACT_APP_API_BASE_URL

const API_LIVROS = API_BASE + "/livros"

export const listarLivros = () => axios.get(API_LIVROS)
export const cadastrarLivro = (formData) => axios.post(API_LIVROS, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
export const obterLivro = (id) => axios.get(`${API_LIVROS}/${id}`)
export const listarGeneros = () => axios.get(`${API_BASE}/generos`);
export const baixarPdf = (id) => axios.get(`${API_LIVROS}/${id}/pdf`, { responseType: 'blob' })