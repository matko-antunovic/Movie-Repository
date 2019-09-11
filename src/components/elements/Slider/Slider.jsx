import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../config"
import {Link} from "react-router-dom"



export default class CenterMode extends Component {
  render() {
    const settings = {
      arrows:true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 1500,
      slidesToScroll:4,
      initialSlide: 1,
      infinite: true
    };
   
const limitTitle=(title,limit=17)=>{
  const newTitle=[];
  if(title.length>limit){
      title.split(" ").reduce((acc,cur)=>{
          if(acc+cur.length <= limit){
              newTitle.push(cur);
          }
          return acc + cur.length;
      },0);
      
  }else{
    newTitle.push(title)
  }

  return `${newTitle.join(" ")}`;
  
}
    const {movies,title,upcomingMovies, actionMovies, comedyMovies, loading}=this.props
    return (
        <div className="rmdb-slider-container">
          {loading ? null : null}
          {!loading ? <h3 className="title">{title}</h3> : null}
        <Slider {...settings} style={{width:"10rem"}}>
          {(movies || upcomingMovies || actionMovies || comedyMovies) &&
          (movies || upcomingMovies || actionMovies || comedyMovies).map(movie=>(
            <figure key={movie.id} className="h-carousel-item">
              <Link to={{pathname:`/${movie.id}`, movieName:`${movie.original_title}`}}>
              <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt="NOTH" className="img" />
              </Link>
            <figcaption>
            <Link to={{pathname:`/${movie.id}`, movieName:`${movie.original_title}`}}>
              <h5 className="truncate truncate-small">{limitTitle(movie.title,17)}</h5>
              </Link>
            </figcaption>
           
          </figure>
          ))}
        </Slider>
        </div>
    );
  }
}