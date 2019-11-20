import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from "./Header"
import Search from "./Search"
import Create from "./Create"
import Favorites from "./Favorites"
import Overlay from "./Overlay"


const Home = () => {

    return (
        <div>
            {/* <head>
                <link href="https://fonts.googleapis.com/css?family=Sail&display=swap" rel="stylesheet" />
            </head> */}

            <main>
                <header>
                    <Header />
                </header>
                <div className="homeHero">
                    <div className="homeTitleBox">
                        <h1>Personal Speakeasy</h1>
                    </div>
                </div>
                <Switch>
                    <Route exact path="/Home" component={Home} />
                    <Route exact path="/Search" component={Search} />
                    <Route exact path="/Create" component={Create} />
                    <Route exact path="/Favorites" component={Favorites} />
                    <Route exact path="/Overlay" component={Overlay} />
                </Switch>
                
                <Search/>
                <Create/>
                <Favorites/>
            </main>
        </div>
    )

}

export default Home