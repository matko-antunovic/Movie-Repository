import React from 'react'
import "./MovieSimilar.css"
import {IMAGE_BASE_URL, SMALL_SIZE} from "../../../config";

const MovieSimilar = ({movie}) => {
    return (
        <div className="movie-similar">
            { movie.poster_path ? 
            <img
            src={`${IMAGE_BASE_URL}${SMALL_SIZE}${movie.poster_path}`}
            alt={`./images/no_image.jpg`}
            />

            : null}
         
        </div>
    )
}

export default MovieSimilar
