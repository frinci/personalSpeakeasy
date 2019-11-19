import Axios from 'axios'
const BASE_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=`

export const api = Axios.create({
    baseURL: BASE_URL
})