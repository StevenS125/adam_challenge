import React, { Component } from 'react';
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import './Slideshow.scss'


export default class Slideshow extends Component {
  render() {
    return (
        <div className="Scontainer">
            <img className="bgImg" src="http://placekitten.com/540/420" alt="kats"></img>
            <div className="controls">
                <div className="btnSwitch"><MdSkipPrevious /></div>
                <div className="btnSwitch">hello</div>
                <div className="btnSwitch"><MdSkipNext /></div>  
            </div>
            
        </div>
    )
  }
}