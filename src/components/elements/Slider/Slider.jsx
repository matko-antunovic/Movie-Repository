import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./Slider.css"


export default class CenterMode extends Component {
  render() {
    const settings = {
      className: "center",
      arrows:true,
      centerMode: true,
      infinite: true,
      centerPadding: "60px",
      slidesToShow: 4,
      speed: 500
    };


    const {movies}=this.props



    return (
      <div className="container">
        <Slider {...settings} >
          {movies &&
          movies.map(movie=>(
            <figure key={movie.id} className="h-carousel-item">
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