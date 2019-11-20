import React from 'react'

const Overlay = props => {
    const { title, image, ingredients, directions} = props.location.state;
    return (
        <div className="overlayBox">
            <h3>{title}</h3>
            <div className="image"></div>
            <p>{image}</p>
            <h5>Ingredients</h5>
            <p>{ingredients}</p>
            <h5>Directions</h5>
            <p>{directions}</p>
        </div>
    )
}

export default Overlay 