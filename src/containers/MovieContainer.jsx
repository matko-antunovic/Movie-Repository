import React, { Component } from 'react'
import {connect} from "react-redux"
import { getMovie,showLoadingSpinner,clearMovie,getSimilarMovies,getMovieVideo,getMovieReview} from "../actions/movieActions"
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
        this.props.getSimilarMovies(movieId);
        this.props.getMovieVideo(movieId);
        this.props.getMovieReview(movieId);
    }

    render() {
      
        return (
            <div>
                <Movie 
                movie={this.props.movie.movie}
                directors={this.props.movie.directors}
                actors={this.props.movie.actors}
                loading={this.props.movie.loading}
                movieId={this.props.movieId}
                review={this.props.review}
                similar={this.props.movie.similarMovies}
                />
            </div>
        )
    }
}

const mapStateToProps=state=>{
    return{
        movie:state.movie,
        movieId:state.movie.trailers,
        review:state.movie.review
    };
    
}
const mapDispatchToProps=(dispatch)=>({
    getMovie:(movieId)=>{ dispatch(getMovie(movieId))},
    showLoadingSpinner:()=>{ dispatch(showLoadingSpinner())},
    clearMovie:()=>{ dispatch(clearMovie())},
    getSimilarMovies:(movieId)=>{dispatch(getSimilarMovies(movieId))},
    getMovieVideo:(movieId)=>{dispatch(getMovieVideo(movieId))},
    getMovieReview:(movieId)=>{dispatch(getMovieReview(movieId))}
})

export default connect(mapStateToProps,mapDispatchToProps)(MovieContainer);