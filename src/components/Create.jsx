import React from 'react'
import { api } from "../services/MockApiConfig"
import { Redirect } from 'react-router-dom'
// import Overlay from './Overlay'

class Create extends React.Component {
    constructor() {
        super()
        this.state = {
            title: "Your Title",
            image: "",
            ingredients: "",
            directions: "",
            errorMsg: "",
            redirect: false
        }
    }

    handleTitleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;
        console.log('name', name);

        this.setState({ name: value })
    }


    handleSubmit = event => {
        event.preventDefault()

        const { title, image, ingredients, directions } = this.state
        const data = {
            title,
            image,
            ingredients,
            directions
        }
        api.post("/cocktails", data)
            .then(() => {
                this.setState({
                    redirect: true
                })
            })

            .catch(() => this.setState({ errorMsg: "An error occured, please refresh." }))
    }

    render() {

        return (
            <div>
                {this.state.redirect && (
                    <Redirect to={{
                        pathname: "/Overlay", 
                        state: { ...this.state }
                    }} />
                )}
                <div className="createHero">
                    <div className="createTitleBox">
                        <h1>Create Your Own Recipes</h1>
                    </div>
                </div>

                <div className="createDivider"></div>
                <div className="formBox">

                    <form onChange={this.handleTitleInput} onSubmit={this.handleSubmit}>
                        <h3>{this.state.title}</h3>
                        <h5>Image URL</h5>
                        <input type="text" name="image"></input>

                        <h5>Title</h5>
                        <input type="text" name="titleInput" onChange={(e) => this.handleTitleInput(e, 'title')}></input>

                        <h5>Ingredients</h5>
                        <input type="text" name="ingredients"></input>

                        <h5>Directions</h5>
                        <input type="text" name="directions"></input><br></br>

                        <input type="submit" value="Save Cocktail" />

                    </form>
                </div>
            </div>
        )
    }
}

export default Create