import React from 'react'
import { api } from "../services/MockApiConfig"
import "./styles/Favorites.css"

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
            
            this.setState(({ 
                cocktails: cocktails.data[0].cocktails
            }))
         
            // console.log("This is cocktails' data :", cocktails.data[0].cocktails)
        }
        catch (error) {
            console.error(error)
        }
    }

    render() {
        const COCKTAILS = this.state.cocktails.map((cocktail, index) => (
            <div key={index}>
                <img className="favoriteImage" src={cocktail.image}/>
                <h3>{cocktail.title}</h3>
            </div>
        ))
        // console.log(this.state.cocktails)
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