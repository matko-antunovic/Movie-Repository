import React from 'react'
import {MovieSimilarStyles} from "./MovieSimilarStyles"
import {IMAGE_BASE_URL, SMALL_SIZE} from "../../../config";
import {withRouter} from "react-router-dom"

const MovieSimilar = ({movie,onMouseEnter,history}) => {

    return (
        <MovieSimilarStyles onClick={()=>history.push(`/${movie.id}`)} onMouseEnter={()=>onMouseEnter(movie)}>
            { movie.poster_path ? 
            <img
            src={`${IMAGE_BASE_URL}${SMALL_SIZE}${movie.poster_path}`}
            alt={`./images/no_image.jpg`}
            />
            : null}
         
        </MovieSimilarStyles>
    )
}

export default withRouter(MovieSimilar)
