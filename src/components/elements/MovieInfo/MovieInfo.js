import React from 'react'
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../config"
import MovieThumb from "../MovieThumb/MovieThumb"
import Add from "../../reusables/Add"
import {MovieInfoStyles,MovieInfoHolder,MovieInfoTitle,MovieInfoContent,MovieInfoThumb,MovieInfoText,MovieInfoRating,MovieInfoScore,MovieInfoDirector} from "./MovieInfoStyles"

const MovieInfo = ({movie,directors,addToWatchlist,watchlist}) => {
    
    return (
        <MovieInfoStyles
        bck={movie.backdrop_path}>
           <MovieInfoContent>
               <MovieInfoThumb>
                   <MovieThumb
                   image={movie.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}` : "./images/no_image. jpg"}
                   clickable={false}
                   />
               </MovieInfoThumb>
               <MovieInfoText>
                   <MovieInfoTitle>
                        <h1>{movie.title}</h1> 
                        <Add addToWatchlist={()=>addToWatchlist(movie)}/>
                        </MovieInfoTitle>
                  
                   <h3>PLOT</h3>
                   <p>{movie.overview}</p>
                   <MovieInfoHolder>
                       <div>
                   <h3>IMDB RATING</h3>
                   <MovieInfoRating>
                       <meter min="0" max="100" optimum="100" low="40" high="75" value={movie.vote_average *10}/>
                       <MovieInfoScore>{movie.vote_average}</MovieInfoScore>
                   </MovieInfoRating>
                   </div>
                   <div>
                   {directors.length > 1 ? <h3>DIRECTORS</h3>  : <h3>DIRECTOR</h3>}
                   {directors.map((el,i)=> {
                       return <MovieInfoDirector key={i}>{el.name}</MovieInfoDirector>
                   })}
                   </div>
                  </MovieInfoHolder>
               </MovieInfoText>

           </MovieInfoContent>
        </MovieInfoStyles>
    )
}

export default MovieInfo
