import React, { Component } from 'react';
import { Button } from '@blueprintjs/core';
// import Nav from './js/Nav.js';

class GetColorPalette extends Component {
    constructor(props){
        super(props);
        this.state = {
            data: [],
            color1: null,
            color2: null,
            color3: null,
            color4: null,
            color5: null,
            isFetching: false
        }
    }
    generateNumber = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }
  // Fetches our GET route from the Express server. (Note the route we are fetching matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/color_palette_route');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  getRandRes = () => {
    this.setState({isFetching:true});
    this.callBackendAPI()
      .then(req => this.setState(
        {
            data: req.body.color_palette,
            color1: req.body.color_palette[0][0],
            color2: req.body.color_palette[1],
            color3: req.body.color_palette[2],
            color4: req.body.color_palette[3],
            color5: req.body.color_palette[4],
            isFetching: false
        }
          ))
      .catch(err => console.log(err));
  }
  render(){
      return(
        <div className="hbo-data-after">
            <div id="hboLeft">
                <div>
                    <h1>Colors</h1>
                </div>
                <Button rightIcon = "random" onClick={ this.getRandRes } id = "hboButton" loading={this.state.isFetching} color="#2cb0e5">Generate</Button>
            </div>  

            <div id="hboRight">
                <p className="hbo-route-p">{this.state.randTitle} {this.state.year}</p>
                <img src = {this.state.pic} alt=""></img> 
            </div>
        </div>
        );
  }
}

export default GetColorPalette;