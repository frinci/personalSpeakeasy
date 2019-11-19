import Axios from 'axios'
const BASE_URL = `https://5dd08290d5f1a500149a85f2.mockapi.io`

export const api = Axios.create({
    baseURL: BASE_URL
})