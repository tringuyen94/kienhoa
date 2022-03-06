import axios from 'axios'
export const DOMAIN = "http://localhost:5050"
const API = `${DOMAIN}/api`

const restConnector = axios.create({
   baseURL: API
})

export default restConnector