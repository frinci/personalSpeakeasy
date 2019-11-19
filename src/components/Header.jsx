import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                
            </div>
            <nav className="navBar">
                <NavLink exact activeclassname="active" to="/Home">
                    Home
                    </NavLink>
                <NavLink exact activeclassname="active" to="/Search">
                    Search
                    </NavLink>
                <NavLink exact activeclassname="active" to="/Create">
                    Create
                </NavLink>
                <NavLink exact activeclassname="active" to="/Favorites">
                    Favorites
                </NavLink>
            </nav>
        </div>
    )
}

export default Header