import React from 'react'
import { api } from '../services/ThirdPartyApiConfig'
import "./styles/Search.css"
import border from "./images/VectorImages/border.png"

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            apiCocktails: [],
            filteredResults: ''
        }
    }

    componentDidMount() {
        this.fetchCocktailApi()
    }

    fetchCocktailApi = async () => {
        try {
            const apiCocktails = await api.get("/filter.php?c=Cocktail")
            this.setState({ apiCocktails: apiCocktails.data.drinks })
            console.log(apiCocktails)
        }
        catch (error) {
            console.error(error)
        }
    }

    handleInput = async (event) => {
        const searchValue = event.target.value

        this.setState({
            searchValue,

        })
        console.log(searchValue)
        console.log(this.state.apiCocktails)
        const filteredResults = this.state.apiCocktails.filter(
            (cocktail) => {
                console.log(cocktail.strDrink)
                return cocktail.strDrink.toLowerCase().includes(searchValue.toLowerCase())
            })
        console.log(filteredResults)
        this.setState({
            filteredResults
        })
    }

    render() {

        return (
            <div>
                <div className="searchDecoDivider">
                    <img src={border} alt="art deco divider"/>
                </div>

                <h2>Search Cocktails</h2>

                <input type="text" name="searchValue" onChange={this.handleInput} placeholder="Old Fashioned" />

                <div className="searchCardBox">
                    <img className="searchImage" src={this.state.filteredResults.strDrinkThumb} />
                    <h3>{this.filteredResults}</h3>
                </div>
            </div>
        )
    }
}

export default Search