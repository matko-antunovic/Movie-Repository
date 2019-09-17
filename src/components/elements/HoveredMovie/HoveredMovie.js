import React from 'react'
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../config"
import {SmallInfo,SmallInfoDetails,SmallInfoImage,SmallInfoDetailsText,SmallInfoRating} from "./SmallInfoStyles"

const HoveredMovie = ({movie,history}) => {
    return (
        <SmallInfo>
        <SmallInfoImage onClick={()=>history.push(`/${movie.id}`)}>
          <img
           src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`}
           alt="noIMG"
         />

       </SmallInfoImage>
 
       <SmallInfoDetails>
         <h2 onClick={()=>history.push(`/${movie.id}`)}>{movie.original_title}</h2>
         <SmallInfoDetailsText>{movie.overview}</SmallInfoDetailsText>
         <h4>IMDB RATING</h4>
         <SmallInfoRating>
           <meter
             min="0"
             max="100"
             optimum="100"
             low="40"
             high="75"
             value={movie.vote_average * 10}
           />
           <p>SCORE: {movie.vote_average}</p>
         </SmallInfoRating>
       </SmallInfoDetails>
     </SmallInfo>
    )
}

export default HoveredMovie
