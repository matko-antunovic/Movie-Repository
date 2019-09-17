import React from 'react';
import {MovieThumbStyles,MovieThumbContainer,MovieThumbName} from "./MovieThumbStyles"
import {Link} from "react-router-dom";

const MovieThumb = ({image,movieId, movieName, clickable,width}) => {
    return (
        <MovieThumbStyles style={{width:`${width}`}}>
            {clickable ? 
            <MovieThumbContainer>
            <Link to={{pathname:`/${movieId}`, movieName:`${movieName}`}}>
            <img src={image} alt="moviethumb" />
            </Link>
            <MovieThumbName>{movieName}</MovieThumbName>
            </MovieThumbContainer>
            :(

            <img src={image} alt="moviethumb" />
        )}
            
        </MovieThumbStyles>
    )
}

export default MovieThumb
