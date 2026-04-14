import axios from 'axios'

const baseURL = "https://api.playdacha.ru"
const instance = axios.create({ baseURL })

export default instance
