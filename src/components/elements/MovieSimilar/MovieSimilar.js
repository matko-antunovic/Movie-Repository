import React from 'react'
import "./MovieSimilar.css"
import {IMAGE_BASE_URL, SMALL_SIZE} from "../../../config";
import {withRouter} from "react-router-dom"

const MovieSimilar = ({movie,onMouseEnter,history}) => {
    return (
        <div className="movie-similar" onClick={()=>history.push(`/${movie.id}`)} onMouseEnter={()=>onMouseEnter(movie)}>
            { movie.poster_path ? 
            <img
            src={`${IMAGE_BASE_URL}${SMALL_SIZE}${movie.poster_path}`}
            alt={`./images/no_image.jpg`}
            />
            : null}
         
        </div>
    )
}

export default withRouter(MovieSimilar)
