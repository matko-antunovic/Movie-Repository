import React, { Component } from "react";
import Slider from "react-slick";
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
    return (
      <div className="container">
        <h2 style={{textAlign:"center"}}>Center Mode</h2>
        <Slider {...settings} >
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
        </Slider>
      </div>
    );
  }
}