import React, { Component } from 'react'
import {connect} from "react-redux"
import { getMovie,showLoadingSpinner,clearMovie} from "../actions/movieActions"
import Movie from "../components/Movie/Movie"

class MovieContainer extends Component {

    componentDidMount(){
        const {movieId}=this.props.match.params;
        this.getMovie(movieId);
  
    }

    getMovie=movieId=>{
        this.props.clearMovie();
        this.props.showLoadingSpinner();
        this.props.getMovie(movieId);
    }

    render() {
        console.log("U KONTEJNERU"  ,this.props.movie)
        return (
            <div>
                <Movie 
                movie={this.props.movie.movie}
                directors={this.props.movie.directors}
                actors={this.props.movie.actors}
                loading={this.props.movie.loading}
                />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{movie:state.movie};
    
}
const mapDispatchToProps=(dispatch)=>({
    getMovie:(movieId)=>{ dispatch(getMovie(movieId))},
    showLoadingSpinner:()=>{ dispatch(showLoadingSpinner())},
    clearMovie:()=>{ dispatch(clearMovie())},
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);