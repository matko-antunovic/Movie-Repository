import React from 'react';
import "./MovieThumb.css";
import {Link} from "react-router-dom";

const MovieThumb = ({image,movieId, movieName, clickable,width}) => {
    return (
        <div className="rmdb-moviethumb" style={{width:`${width}`}}>
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
