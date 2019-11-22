import React from 'react'
import { api } from "../services/MockApiConfig"
import "./styles/Favorites.css"
import favoritesImage from "./images/favoritesImage.jpg"
import border from "./images/VectorImages/border.png"

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
            console.log(cocktails)
            console.log(cocktails.data)
            
            this.setState(({ 
                cocktails: cocktails.data
            }))
         
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

        return (
            <div>

                <div className="Hero">
                    <img src={favoritesImage} alt=""/>
                    <div className="favoritesTitleBox">
                        <h1>Favorite Recipes</h1>
                    </div>
                </div>

                <div className="favoriteDivider">
                    <img src={border} alt=""/>
                </div>

                <h2>Favorites</h2>

                <div className="favoritesCardBox">
                    {COCKTAILS} 
                </div>

            </div>
        )
    }
}

export default Favorites