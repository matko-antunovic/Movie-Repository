import React from "react";
import Header from "../elements/Header/Header";
import Footer from "../Footer/Footer"
import HomeContainer from "../../containers/HomeContainer";
import MovieContainer from "../../containers/MovieContainer";
import NotFound from "../elements/NotFound/NotFound"
import {Switch,Route} from "react-router-dom";
import "./App.css"

const App=()=>{
    return(
       
        <div className="app">
            <Header/>
            <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/:movieId" component={MovieContainer}/>
            <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>

    )
}
export default App;