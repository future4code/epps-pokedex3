import React from "react"
import { BrowserRouter, Switch, Route } from "react-router-dom"
import HomeScreen from "../screens/HomeScreen/HomeScreen"
import DetailScreen from "../screens/DetailScreen/DetailScreen"
import PokedexUserScreen from '../screens/PokedexUserScreen/PokedexUserScreen'



const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={HomeScreen} />

                
                <Route exact path="/pokedex">
                    <PokedexUserScreen />
                </Route>
                <Route 
                    exact 
                    path="/detalhes/:name" 
                    component={DetailScreen} 
                />

                <Route>
                    <div>Error 404 - Descupe, mas esta página não existe :(</div>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router;