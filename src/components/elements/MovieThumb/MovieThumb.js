import React from 'react';
import "./MovieThumb.css";
import {Link} from "react-router-dom";

const MovieThumb = ({image,movieId, movieName, clickable}) => {
    return (
        <div className="rmdb-moviethumb">
            {clickable ? 
            <Link to={{pathname:`/${movieId}`, movieName:`${movieName}`}}>
            <img src={image} alt="moviethumb" />
            </Link>
            :(
            <Link to={{pathname:`/${movieId}`, movieName:`${movieName}`}}>
            <img src={image} alt="moviethumb" />
            </Link>)}
            
        </div>
    )
}

export default MovieThumb
