import React from 'react'
import {api} from '../services/ThirdPartyApiConfig'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchInput: ""
        }
    }

    // handleInput = () => {

    // }

    // handleClick = () => {

    // }

    componentDidMount() {
        this.fetchCocktailApi()
    }

    fetchCocktailApi = async () => {
        try {
            const cocktail = await api.get("cocktail")
            this.setState({cocktail: cocktail.data})
            console.log(cocktail)
        }
        catch(error) {
            console.error(error)
        }
    }

    render() {
        return (
            <div>
                <div className="searchDecoDivider"></div>
                <h2>Search Cocktails</h2>
                <span><input type="text" name="Search" value={this.state.value} /><button type="submit" className="searchButton">Search Icon</button></span>
                <div className="searchCardBox"></div>
            </div>
        )
    }
}

export default Search