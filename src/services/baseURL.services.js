import axios from 'axios'
export const DOMAIN = "http://kienhoa.vn"
const API = `${DOMAIN}/api`

const restConnector = axios.create({
   baseURL: API
})

export default restConnector