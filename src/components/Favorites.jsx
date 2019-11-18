import React from 'react'
import {api} from "../services/MockApiConfig"

class Favorites extends React.Component {
    constructor(){
        super()
        this.state = {
            cocktails: [],
            foodsToDelete: {},
            toDelete: false,

        }
    }

    // componentDidMount() {
    //     this.fetchCocktails()
    // }

    // fetchCocktails = async () => {
    //     try {
    //         const cocktails = await api.get("/cocktails")
    //         this.setState({cocktails: cocktails.data})
    //     }
    //     catch(error) {
    //         console.error(error)
    //     }
    // }

    // handleDelete = () => {

    // }

    render(){
        return (
            <div>
                <div className="Hero">
                    <div className="favoritesTitleBox">
                        <h1>Favorite Recipes</h1>
                    </div>
                </div>
                <div className="favoriteDivider"></div>
                <div className="favoritesCardBox"></div>
            </div>
        )
    }
}

export default Favorites