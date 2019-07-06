import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../config"
import {Link} from "react-router-dom"


export default class Upcoming extends Component {
  render() {
    const settings = {
      className: "center",
      arrows:true,
      centerPadding: "60px",
      slidesToShow: 8,
      speed: 1500,
      slidesToScroll: 2
    };
    const {upcomingMovies}=this.props
    return (
        <React.Fragment>
        <h3 className="title">Upcoming Movies</h3>
        <Slider {...settings} >
          {upcomingMovies &&
          upcomingMovies.map(movie=>(
            <figure key={movie.id} className="h-carousel-item">
              <Link to={{pathname:`/${movie.id}`, movieName:`${movie.original_title}`}}>
              <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt="img" className="img" />
              </Link>
            <figcaption>
              <h5 className="truncate truncate-small">{movie.title}</h5>
            </figcaption>
           
          </figure>
          ))}
        </Slider>
        </React.Fragment>
    );
  }
}