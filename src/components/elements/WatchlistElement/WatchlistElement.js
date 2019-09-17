import React from 'react'
import {WatchListElement,WatchListImage,WatchListTitle,WatchListClose} from "./WatchListStyles"
import {IMAGE_BASE_URL, SMALL_SIZE} from "../../../config";

const WatchlistElement = ({movie,handleClick,removeFromWatchlist}) => {
    return (
        <WatchListElement>   
        <WatchListClose onClick={()=>removeFromWatchlist(movie.id)}>&#9932;</WatchListClose>     
            <WatchListImage
            onClick={()=>handleClick(movie.id)}
            src={`${IMAGE_BASE_URL}${SMALL_SIZE}${movie.poster_path}`}
            alt={`./images/no_image.jpg`}
            />
            <WatchListTitle onClick={()=>handleClick(movie.id)}>{movie.original_title}</WatchListTitle>
        </WatchListElement>
    )
}

export default WatchlistElement
