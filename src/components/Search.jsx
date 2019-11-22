import React from 'react'
import { api } from '../services/ThirdPartyApiConfig'
import "./styles/Search.css"
import border from "./images/VectorImages/border.png"
import searchIcon from './images/VectorImages/searchIcon.png'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchValue: "",
            apiCocktails: [],
            filteredResults: '',
            clicked:false
        }
    }

    componentDidMount() {
        this.fetchCocktailApi()
    }

    fetchCocktailApi = async () => {
        try {
            const apiCocktails = await api.get("/filter.php?c=Cocktail")
            this.setState({ apiCocktails: apiCocktails.data.drinks })
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

        const filteredResults = this.state.apiCocktails.filter(
            (cocktail) => {
                return cocktail.strDrink.toLowerCase().includes(searchValue.toLowerCase())
            })
        this.setState({
            filteredResults
        })
    }

    handleClick = () => {
        this.setState({
            clicked:true
        })
    }

    render() {
        console.log(this.state.filteredResults.strDrink)

        
        let cocktails = this.state.filteredResults && this.state.filteredResults.map((filteredResult) => (
            <div className="cocktailBox">
                <img className="cocktailImg"src={filteredResult.strDrinkThumb} alt="cocktail img" />
                <h3>{filteredResult.strDrink}</h3>
            </div>
        ))

        return (
            <div>
                <div className="searchDecoDivider">
                    <img src={border} alt="art deco divider" />
                </div>

                <h2>Search Cocktails</h2>
                <div className="searchBarBox">
                    <span>
                        <input type="text" name="searchValue" className="searchBar" onChange={this.handleInput} placeholder="Old Fashioned" />
                        <button type="submit" className="searchButton" onClick={this.handleClick}><img src={searchIcon} alt="search icon" /></button>
                    </span>
                </div>

                <div className="searchCardBox">
                    {this.state.clicked && cocktails}
                </div>
            </div>
        )
    }
}

export default Search