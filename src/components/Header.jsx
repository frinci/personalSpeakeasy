import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
    return (
        <div>
            <div>
                
            </div>
            <nav className="navBar">
                <NavLink exact activeClassname="active" to="/Home">
                    Home
                    </NavLink>
                <NavLink exact activeClassname="active" to="/Search">
                    Search
                    </NavLink>
                <NavLink exact activeClassname="active" to="/Create">
                    Create
                </NavLink>
                <NavLink exact activeClassname="active" to="/Favorites">
                    Favorites
                </NavLink>
            </nav>
        </div>
    )
}

export default Header