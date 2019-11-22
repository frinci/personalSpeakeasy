import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Search from "./Search"
import Create from "./Create"
import Favorites from "./Favorites"
import Overlay from "./Overlay"
import "./styles/Home.css"
import goldLogo from './images/VectorImages/goldLogo.png'
import headerImage from "./images/headerImage.jpg"

const Home = () => {

    return (
        <div >
            <head>
                <link href="https://fonts.googleapis.com/css?family=Sail&display=swap" rel="stylesheet" />
                <title>Personal Speakeasy</title>
            </head>

            <main>
                <a id="Home"></a>
                <header>
                    <div className="navBox">
                        <nav>
                            <span><img src={goldLogo} alt="golden cocktail glass logo" /><h3>Personal Speakeasy</h3></span>
                            <ul>
                                <li><a href="#Home">Home</a></li>
                                <li><a href="#Search">Search</a></li>
                                <li><a href="#Create">Create</a></li>
                                <li><a href="#Favorites">Favorites</a></li>
                            </ul>
                        </nav>
                    </div>
                </header>

                <div className="homeHero">
                    <img className="heroImg"src={headerImage} alt="bartender mixing cocktail" />

                    <div className="homeTitleBox">
                        <img src={goldLogo} alt="golden cocktail glass logo" />
                        <h1>Personal Speakeasy</h1>
                    </div>
                </div>

                <Switch>
                    {/* <Route exact path="/Home" component={Home} /> */}
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/Create" component={Create} />
                    <Route exact path="/Favorites" component={Favorites} />
                    <Route exact path="/Overlay" component={Overlay} />
                </Switch>

                <a id="Search"></a>
                <Search />
                <a id="Create"></a>
                <Create />
                <a id="Favorites"></a>
                <Favorites />
            </main>
        </div>
    )

}

export default Home