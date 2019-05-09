import React, { Component } from 'react';
import { Button, Spinner, Intent } from '@blueprintjs/core';
// import Nav from './js/Nav.js';

class NetflixRoute extends Component {
  constructor(props){
    super(props);

    this.state = {
      data: "",
      randTitle: "",
      pic: "",
      randN: 0,
      isFetching: false,
    };
  }

  generateRand = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }  

  callBackendAPI = async () => {
    const response = await fetch('/u_no_netflix');
    const body = await response.json();
  
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  getRandRes = () => {
    let randN = this.generateRand(0, 249);
    this.callBackendAPI()
      .then(res => this.setState({ data: res.netflix_movie, randTitle: res.netflix_movie[randN].title}))
      .catch(err => console.log(err));
  }
  
  
  render() {
    if(this.state.isFetching){
      return(
        <div className="hbo-data">
          <div className = 'row'> 
            <Button icon = "random" onClick={ this.getRandRes } className = "genButton">Generate</Button>
            <Spinner intent={Intent.PRIMARY} size = {Spinner.SIZE_STANDARD}></Spinner>
          </div>
        </div>
      );
    }
    else{
      return (
        <div className="hbo-data">
          <Button icon = "random" onClick={ this.getRandRes } className = "genButton">Generate</Button>
            <p className="hbo-route-p">{this.state.randTitle}</p>
            <img src = {this.state.pic} alt=""></img>  
        </div>
      );
    }
  }
}
export default NetflixRoute;