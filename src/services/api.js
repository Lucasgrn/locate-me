import axios from "axios";
import { parseCookies } from "nookies";
const apiBaseUrl = process.env.BASE_URL
const { 'findy-token': token } = parseCookies()

const api = axios.create({
  baseURL: 'https://locateme.tech/api'
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { api }