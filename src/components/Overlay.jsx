import React from 'react'
import "./styles/Overlay.css"
import closeButton from "./images/VectorImages/closeButton.png"


const Overlay = props => {
    const { title, image, ingredients, directions} = props.data;
    return (
        <div>

           
            <div className="overlayBox">
                
                <button><img src={closeButton} className="close" alt="close button"  onClick={props.onClose}/></button>

                <h3>{title}</h3>
                <div className="image"></div>
                <img src={image} alt="cocktail image" />
                <h5>Ingredients</h5>
                <p>{ingredients}</p>
                <h5>Directions</h5>
                <p>{directions}</p>
            </div>
            <div className="backgroundFaded"></div>
        </div>
    )
}

export default Overlay 