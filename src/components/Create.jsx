import React from 'react'

class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            tite: "Your Title"

        }
    }

    render() {
        return (
            <div>
                <div className="createHero">
                    <div className="createTitleBox">
                        <h1>Create Your Own Recipes</h1>
                    </div>
                </div>
                <div className="createDivider"></div>
                <div className="formBox">
                <form>
                    <h3>{this.state.title}</h3>
                    <h4>Title</h4>
                    <input type="text" name="title"></input>
                    <h4>Ingredients</h4>
                    <input type = "text" name="ingredients"></input>
                    <h4>Directions</h4>
                    <input type="text" name="directions"></input><br></br>
                    <button type="submit" name="submitCreate">Save Cocktail</button>
                </form>
                </div>
            </div>
        )
    }
}

export default Create