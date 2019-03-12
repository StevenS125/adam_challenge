import React, { Component } from 'react';
import { MdSkipPrevious, MdSkipNext } from "react-icons/md";
import './Engagements.scss'


export default class Engagements extends Component {
  render() {
    return (
      <div className="Econtainer">
        <div className="title">Engagements</div>
          <h1>
            <div className="titleLeft">Joe &amp; Jane Doe</div>
            <div className="titleRight">
              <div className="btnSwitch"><MdSkipPrevious /></div>
              <div className="btnSwitch"><MdSkipNext /></div>  
            </div>
          </h1>

          <main>
            <div className="mainLeft">
              <div className="caption">The Does were an amazing couple to work with and take photos of</div>
              <div>
                  <img src="http://placekitten.com/75/75" alt="kittens" className="smImg1"></img>
                  <img src="http://placekitten.com/75/75" alt="kittens" className="smImg2"></img>
                  <img src="http://placekitten.com/75/75" alt="kittens" className="smImg3"></img>
                  <img src="http://placekitten.com/75/75" alt="kittens" className="smImg4"></img>
              </div>
            </div>
            <div className="mainRight">
              <img src="http://placekitten.com/160/231" alt="kittens"></img>
            </div>

          </main>

        

      </div>
    );
  }
}