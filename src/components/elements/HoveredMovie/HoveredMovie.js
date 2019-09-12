import React from 'react'
import "./HoveredMovie.css"
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../config"
import Add from "../../reusables/Add";

const HoveredMovie = ({movie,movie0,history}) => {
    return (
        <div className="small-info">
        <div onClick={()=>history.push(`/${movie.id}`)} className="small-info__image">
          <img
           className="imgsmall"
           src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
           alt="noIMG"
         />
         <Add />
       </div>
 
       <div className="small-info__details">
         <h2 onClick={()=>history.push(`/${movie.id}`)}>{movie.original_title}</h2>
         <p className="small-info__details--text">{movie.overview}</p>
         <p>IMDB RATING</p>
         <div className="rmdb-rating">
           <meter
             min="0"
             max="100"
             optimum="100"
             low="40"
             high="75"
             value={movie.vote_average * 10}
           />
           <p className="rmdb-score">{movie.vote_average}</p>
         </div>
       </div>
     </div>
    )
}

export default HoveredMovie
