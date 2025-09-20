import axios from 'axios'

const agent = axios.create({
  baseURL: 'https://localhost:5001/api'
})