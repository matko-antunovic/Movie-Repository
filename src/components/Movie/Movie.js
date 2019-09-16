import React from "react";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import Review from "../reusables/Review";
import MovieSimilar from "../elements/MovieSimilar/MovieSimilar";
import SmallInfo from "../elements/SmallInfo/SmallInfo";
import {limitText} from "../../config"
import "./Movie.css";

class Movie extends React.Component {
  state = {
    isHovering: false,
    movieSimilar:null
  };

  handleMouseHover = (movie) => {
    this.setState({
      isHovering: !this.state.isHovering,
      movieSimilar:movie
    });
    
  };

  render() {
    const {
      movie,
      directors,
      actors,
      loading,
      movieId,
      review,
      similar,
      addToWatchlist
    } = this.props;


    return (

      <div className="rmdb-movie">
        {movie ? (
          <div>
            <Navigation movie={movie.original_title} />
            <MovieInfo movie={movie} directors={directors} addToWatchlist={addToWatchlist} />
            <MovieInfoBar
              time={movie.runtime}
              budget={movie.budget}
              revenue={movie.revenue}
            />
          </div>
        ) : null}
        {actors ? (
          <div className="rmdb-movie-grid">
            {movieId.length > 0 ? (
              <div className="rmdb-movie-details">
                <div className="rmdb-movie-details__review">
                  <div className="rmdb-movie-details__review--text">
                    {review ? (
                      limitText(review.content, 600)
                    ) : (
                      <Review name={movie.original_title} />
                    )}
                  </div>
                </div>
                <div className="trailer-holder">
                  <iframe
                    src={`https://www.youtube.com/embed/${movieId[0].key}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="450px"
                  />
                </div>
              </div>
            ) : null}
            <h2>Similar movies</h2>
            {similar.length > 0 ? (
              <div className="rmdb-movie-similar" >
                <div className="rmdb-movie-similar__left-side">
                  {similar.map((s, i) => {
                    if (i < 6) {
                      return <MovieSimilar onMouseEnter={this.handleMouseHover}  key={i} movie={s} />;
                    }
                    return null;
                  })}
                </div>
                <div className="rmdb-movie-similar__right-side">
                  <SmallInfo  movieSimilar0={similar[0]} hovered={this.state.movieSimilar} />
                </div>
              </div>
            ) : null}
            <FourColGrid header={"Actors"} actors={actors} />
          </div>
        ) : null}
        {!actors && !loading ? <h1> No movie found! </h1> : null}
        {loading ? <Spinner /> : null}
      </div>
    );
  }
}


export default (Movie);
