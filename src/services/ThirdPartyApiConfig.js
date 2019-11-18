import Axios from 'axios'
const BASE_API_URL = `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=cocktail`

export const api = Axios.create({
    baseApiURL: BASE_API_URL
})