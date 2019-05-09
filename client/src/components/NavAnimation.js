import React, { Component } from 'react';
import '../styles/index.css';
// let netflixLogo = require('../images/netflix_2014.png');
// <img src = {netflixLogo} alt = "netflix logo"></img>
class NavAnimation extends Component {
    
    render(){
        return(
            <div className="svg-wrapper">
                <svg height="60" width="80" xmlns="http://www.w3.org/2000/svg">
                <rect className="shape" height="60" width="80" />
                <div className="text"></div>
                </svg>
            </div>
        );
    }
}

export default NavAnimation;