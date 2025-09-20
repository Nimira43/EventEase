import axios from 'axios'

const agent = axios.create({
  baseURL: 'https://localhost:5001/api'
})

agent.interceptors.response.use(async response => {
  try {
    
  } catch (error) {
    console.log(error)
    return Promise.reject(error)
  }
})