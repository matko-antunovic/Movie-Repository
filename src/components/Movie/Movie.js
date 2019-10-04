import React from "react";
import Navigation from "../elements/Navigation/Navigation";
import MovieInfo from "../elements/MovieInfo/MovieInfo";
import MovieInfoBar from "../elements/MovieInfoBar/MovieInfoBar";
import FourColGrid from "../elements/FourColGrid/FourColGrid";
import Spinner from "../elements/Spinner/Spinner";
import Review from "../reusables/Review";
import MovieSimilar from "../elements/MovieSimilar/MovieSimilar";
import SmallInfo from "../elements/SmallInfo/SmallInfo";
import Rating from "./Rating"

import { limitText } from "../../config";
import {MovieContainer,MovieGrid,RateMovie,MovieDetails,MovieTrailer,MovieReview,MovieReviewText,MovieSimilar2,MovieSimiliarLeftSide} from "./MovieStyles"



class Movie extends React.Component {
  state = {
    isHovering: false,
    movieSimilar: null
  };

  handleMouseHover = movie => {
    this.setState({
      isHovering: !this.state.isHovering,
      movieSimilar: movie
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
      addToWatchlist,
      watchlist,
      guestSessionId,
      id,
      ratings,
      changeRating,
      rate
    } = this.props;

    return (
      <MovieContainer>
    
        {movie ? (
          <React.Fragment>
            <Navigation movie={movie.original_title} />
            <MovieInfo
              movie={movie}
              directors={directors}
              addToWatchlist={addToWatchlist}
              watchlist={watchlist}
            />
            <RateMovie>
           <span>Rate Movie :</span><Rating rate={rate} changeRating={changeRating} ratings={ratings} id={id} guestSessionId={guestSessionId} />
           </RateMovie>
            <MovieInfoBar
              time={movie.runtime}
              budget={movie.budget}
              revenue={movie.revenue}
            />
          </React.Fragment>
        ) : null}
        {actors ? (
          <MovieGrid>
            {movieId.length > 0 ? (
              <MovieDetails>
                <MovieReview>
                  <MovieReviewText>
                    {review ? (
                      limitText(review.content, 600)
                    ) : (
                      <Review name={movie.original_title} />
                    )}
                  </MovieReviewText>
                </MovieReview>
                <MovieTrailer>
                  <iframe
                    src={`https://www.youtube.com/embed/${movieId[0].key}`}
                    frameBorder="0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    title="video"
                    width="100%"
                    height="450px"
                  />
                </MovieTrailer>
              </MovieDetails>
            ) : null}

            {similar.length > 0 ? (
              <React.Fragment>
                <h2 style={{marginTop:"2rem"}}>Similar movies</h2>
                <MovieSimilar2>
                  <MovieSimiliarLeftSide>
                    {similar.map((s, i) => {
                      if (i < 6) {
                        return (
                          <MovieSimilar
                            onMouseEnter={this.handleMouseHover}
                            key={i}
                            movie={s}
                          />
                        );
                      }
                      return null;
                    })}
                  </MovieSimiliarLeftSide>
                  <div style={{width:"100%"}}>
                    <SmallInfo
                      movieSimilar0={similar[0]}
                      hovered={this.state.movieSimilar}
                    />
                  </div>
                </MovieSimilar2>
              </React.Fragment>
            ) : null}
            <FourColGrid header={"Actors"} actors={actors} />
          </MovieGrid>
        ) : null}
        {!actors && !loading ? <h1> No movie found! </h1> : null}
        {loading ? <Spinner /> : null}
      </MovieContainer>
    );
  }
}

export default Movie;