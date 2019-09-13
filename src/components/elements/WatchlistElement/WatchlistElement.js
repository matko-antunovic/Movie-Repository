import React from 'react'
import "./WatchListElement.css"
import {IMAGE_BASE_URL, SMALL_SIZE} from "../../../config";

const WatchlistElement = ({movie,handleClick,removeFromWatchlist}) => {
    return (
        <div className="watchlist-element">   
        <span onClick={()=>removeFromWatchlist(movie.id)} className="watchlist-close">&#9932;</span>     
            <img
            onClick={()=>handleClick(movie.id)}
            className="watchlist-image"
            src={`${IMAGE_BASE_URL}${SMALL_SIZE}${movie.poster_path}`}
            alt={`./images/no_image.jpg`}
            />
            <h3 onClick={()=>handleClick(movie.id)} className="watchlist-title">{movie.original_title}</h3>
        </div>
    )
}

export default WatchlistElement
