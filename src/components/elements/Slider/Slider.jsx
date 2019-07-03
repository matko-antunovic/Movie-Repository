import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"
import {IMAGE_BASE_URL,POSTER_SIZE} from "../../../config"


export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      arrows:true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 8,
      speed: 700
    };


    const {movies}=this.props



    return (
      <div className="container">
        <Slider {...settings} >
          {movies &&
          movies.map(movie=>(
            <figure key={movie.id} >
              <div>
              <img src={`${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`} alt="img" /></div>
            <figcaption>
              <h5 className="truncate truncate-small">{movie.title}</h5>
            </figcaption>
          </figure>
          ))}
        </Slider>
      </div>
    );
  }
}