import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getMovie,
  showLoadingSpinner,
  clearMovie,
  getSimilarMovies,
  getMovieVideo,
  getMovieReview,
  addToWatchlist,
  getRatedMovies,
  rateMovie
} from "../actions/movieActions";
import Movie from "../components/Movie/Movie";

class MovieContainer extends Component {
  state = {
    rating: 0
  };

  componentDidMount() {
    const { movieId } = this.props.match.params;
    this.getMovie(movieId);
    if(this.props.ratings.length>0){
      const ratingCheck=this.props.ratings.filter(r=>r.id == movieId);
      if(ratingCheck.length>0){
        this.setState({rating:ratingCheck[0].rating})
      }
      
    }
  }

  componentDidUpdate(prevProps, prevState) {
    const{movieId}=this.props.match.params;
    if (prevState.rating !== this.state.rating) {
      const { rateMovie,token } = this.props;
        rateMovie(this.state.rating,token,movieId)
    }
 
    if (this.props.match.params !== prevProps.match.params) {
        this.setState({
            rating:0
        })
      this.getMovie(movieId);
    }


  }
  getMovie = movieId => {
    const {clearMovie,showLoadingSpinner,getMovie,getSimilarMovies,getMovieVideo,getMovieReview}=this.props;
    clearMovie();
    showLoadingSpinner();
    getMovie(movieId);
    getSimilarMovies(movieId);
    getMovieVideo(movieId);
    getMovieReview(movieId);
  };


  changeRating = newRating => {
    this.setState(
      {
        rating: newRating
      }
    );
  };

  render() {

    return (
        <Movie
        changeRating={this.changeRating}
          guestSessionId={this.props.token}
          id={this.props.match.params}
          movie={this.props.movie.movie}
          directors={this.props.movie.directors}
          actors={this.props.movie.actors}
          loading={this.props.movie.loading}
          movieId={this.props.movieId}
          review={this.props.review}
          similar={this.props.movie.similarMovies}
          addToWatchlist={this.props.addToWatchlist}
          watchlist={this.props.watchlist}
          ratings={this.props.ratings}
          rate={this.state.rating}
        />
    );
  }
}

const mapStateToProps = state => {
  return {
    movie: state.movie,
    movieId: state.movie.trailers,
    review: state.movie.review,
    watchlist: state.movie.watchlist,
    token: state.home.authToken,
    ratings: state.movie.ratings
  };
};
const mapDispatchToProps = dispatch => ({
  getMovie: movieId => {
    dispatch(getMovie(movieId));
  },
  showLoadingSpinner: () => {
    dispatch(showLoadingSpinner());
  },
  clearMovie: () => {
    dispatch(clearMovie());
  },
  getSimilarMovies: movieId => {
    dispatch(getSimilarMovies(movieId));
  },
  getMovieVideo: movieId => {
    dispatch(getMovieVideo(movieId));
  },
  getRatedMovies: guestSessionId => {
    dispatch(getRatedMovies(guestSessionId));
  },
  getMovieReview: movieId => {
    dispatch(getMovieReview(movieId));
  },
  addToWatchlist: movie => {
    dispatch(addToWatchlist(movie));
  },
  rateMovie:(rating,token,params)=> {
    dispatch(rateMovie(rating,token,params))
  }

})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieContainer);

