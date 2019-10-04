import React from "react";
import Header from "../elements/Header/Header";
import Footer from "../Footer/Footer"
import HomeContainer from "../../containers/HomeContainer";
import MovieContainer from "../../containers/MovieContainer";
import NotFound from "../elements/NotFound/NotFound"
import {Switch,Route} from "react-router-dom";

const App=()=>{
    return(
       
        <div className="app">
            <Header/>
            <Switch>
            <Route exact path="/" render={(props)=> <HomeContainer key={props.match.path} />}/>
            <Route exact path="/:movieId"  render={(props) =><MovieContainer key={props.match.params.movieId} {...props}/>}/>  
            <Route component={NotFound}/>
            </Switch>
            <Footer/>
        </div>

    )
}
export default App;