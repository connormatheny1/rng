import React, { Component } from "react";
import NetflixRoute from '../api/NetflixRoute';
class Netflix extends Component {


  
  render() {
    
    return (
      <div id="netflix-content-container">
          {/*<div id="netflix-content-bg">
            <img id ="netflix-pic" src = {require("../images/netflix-background.jpg")} alt="background pictur for netflix container"></img>
           </div>*/}
          <div className = "random-gen">
            <NetflixRoute></NetflixRoute>
          </div>
      </div>
    );
  }
}
 
export default Netflix;