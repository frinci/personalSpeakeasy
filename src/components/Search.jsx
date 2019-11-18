import React from 'react'

class Search extends React.Component {
    constructor() {
        super()
        this.state = {
            searchInput: ""
        }
    }

    handleInput = () => {

    }

    handleClick = () => {

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