import React from 'react'
import { api } from "../services/MockApiConfig"

class Favorites extends React.Component {
    constructor() {
        super()
        this.state = {
            cocktails: [],
        }
    }

    componentDidMount() {
        this.fetchCocktails()
    }

    fetchCocktails = async () => {
        try {
            const cocktails = await api.get("/cocktails")
            this.setState(state => ({ 
                cocktails: [...state.cocktails, cocktails.data] 
            }))
            console.log(cocktails)
        }
        catch (error) {
            console.error(error)
        }
    }

    render() {
        const COCKTAILS = this.state.cocktails.map((cocktail, index) => (
            <React.Fragment key={index}>
                <div>{cocktail.image}</div>
                <h3>{cocktail.title}</h3>
            </React.Fragment>
        ))
        return (
            <div>
                
                <div className="Hero">
                    <div className="favoritesTitleBox">
                        <h1>Favorite Recipes</h1>
                    </div>
                </div>

                <div className="favoriteDivider"></div>

                <div className="favoritesCardBox">
                    {COCKTAILS}
                </div>

            </div>
        )
    }
}

export default Favorites