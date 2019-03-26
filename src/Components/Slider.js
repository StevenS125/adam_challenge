import React, { Component } from 'react';
import './Slider.scss'

// Components
import Engagements from './Engagements' 
import Slideshow from "./Slideshow"

export default class Slider extends Component {
  render() {
    return (
      <div className="sliderContainer">
        <Engagements />
        <Slideshow />
      </div>
    );
  }
}

