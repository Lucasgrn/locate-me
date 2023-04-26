import axios from "axios";
import { parseCookies } from "nookies";
import * as dotenv from 'dotenv'
dotenv.config()
const apiBaseUrl = process.env.BASE_URL
const { 'findy-token': token } = parseCookies()

const api = axios.create({
  baseURL: apiBaseUrl
})

if (token) {
  api.defaults.headers['Authorization'] = `Bearer ${token}`
}

export { api }
