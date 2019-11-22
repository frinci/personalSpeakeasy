import React from 'react'
import { api } from "../services/MockApiConfig"
import { Redirect } from 'react-router-dom'
import "./styles/Create.css"
import createImage from "./images/createImage.jpg"
import border from "./images/VectorImages/border.png"
import Overlay from "./Overlay"
class Create extends React.Component {
    constructor() {
        super()
        this.state = {

            title: "Your Title",
            image: "",
            ingredients: "",
            directions: "",
            errorMsg: "",
            redirect: false,
            isOpen: true,
            clicked: false
        }
    }

    handleTitleInput = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({ [name]: value })
    }


    handleSubmit = event => {
        event.preventDefault()

        const { title, image, ingredients, directions } = this.state
        const data = {
            title,
            image,
            ingredients,
            directions,
        }
        // console.log(ingredients)
        api.post("/cocktails", data)
            .then(() => {
                this.setState({
                    clicked: true,
                    // isOpen: true
                })
            })

            .catch(() => this.setState({ errorMsg: "An error occured, please refresh." }))
    }

    onClose = () => {
        console.log('hit')
          this.setState ({
              clicked: false
          })
        //   if (isOpen) 
    }

    render() {
        let overlay = this.state.clicked ? <Overlay data={this.state} onClose={this.onClose}/> : null
        return (
            <div>
                {this.state.redirect && (
                    <Redirect to={{
                        pathname: "/Overlay",
                        state: { ...this.state }
                    }} />
                )}
                <div className="createHero">
                    <img src={createImage} alt="" />
                    <div className="createTitleBox">
                        <h1>Create Your Own Recipes</h1>
                    </div>
                </div>

                <div className="createDivider">
                    <img src={border} alt="art deco divider" />
                </div>
                <div className="formBox">
                    {overlay}
                    <form onChange={this.handleTitleInput} onSubmit={this.handleSubmit}>
                        <h3>{this.state.title}</h3>
                        <h5>Image URL</h5>
                        <input type="text" name="image" className="formInput"></input>

                        <h5>Title</h5>
                        <input type="text" name="title" onChange={(e) => this.handleTitleInput(e, 'title')} className="formInput"></input>

                        <h5>Ingredients</h5>
                        <input type="text" name="ingredients" className="formIngredients"></input>

                        <h5>Directions</h5>
                        <input type="text" name="directions" className="formDirections"></input><br></br>

                        <input type="submit" value="Save Cocktail" className="button" />

                    </form>
                </div>
            </div>
        )
    }
}

export default Create