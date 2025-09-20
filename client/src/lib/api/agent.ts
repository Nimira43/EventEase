import axios from 'axios'

const sleep = (delay: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, delay)
  })
}

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