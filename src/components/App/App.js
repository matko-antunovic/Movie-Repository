import React from "react";
import Header from "../elements/Header/Header";
import HomeContainer from "../../containers/HomeContainer";
import MovieContainer from "../../containers/MovieContainer";
import NotFound from "../elements/NotFound/NotFound"
import {Switch,Route} from "react-router-dom";

const App=()=>{
    return(
       
        <div>
            <Header/>
            <Switch>
            <Route exact path="/" component={HomeContainer}/>
            <Route exact path="/:movieId" component={MovieContainer}/>
            <Route component={NotFound}/>
            </Switch>
        </div>

    )
}
export default App;