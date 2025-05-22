import axios from 'axios'

const API_BASE = process.env.REACT_APP_API_BASE_URL

export const listarLivros = () => axios.get(API_BASE)
export const cadastrarLivro = (formData) => axios.post(API_BASE, formData, {
  headers: { 'Content-Type': 'multipart/form-data' }
})
export const obterLivro = (id) => axios.get(`${API_BASE}/${id}`)
export const listarGeneros  =  axios.get(`${API_BASE}/generos`)
export const baixarPdf = (id) => axios.get(`${API_BASE}/${id}/pdf`, { responseType: 'blob' })