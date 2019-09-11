import React from "react";
import "./FourColGrid.css";
import {IMAGE_BASE_URL, POSTER_SIZE} from "../../../config";
import MovieThumb from "../MovieThumb/MovieThumb"
import Actor from "../Actor/Actor"




const FourColGrid = (props) => {
    let movie;
    if(props.movies){movie=props.movies.map((element,i)=>{
        return  (
        <div key={i} className="rmdb-grid-element">
        <MovieThumb
        clickable={true}
        image={element.poster_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${element.poster_path}` : "./images/no_image.jpg"}
        movieId={element.id}
        movieName={element.original_title}
        />
        </div>)
    } )
} else{
   movie=props.actors.map((el,i)=>{
       if(i<15){
        return <div key={i} className="rmdb-grid-element"> <Actor key={i} actor={el}/></div> 
       }
        return null
        }) 
}
        

    return (
        <div className="rmdb-grid">
            {props.header && !props.loading ? <h1>{props.header}</h1> : null}
            <div className="rmdb-grid-content">
                {movie}
            </div>
        </div>
    )

}

export default FourColGrid
