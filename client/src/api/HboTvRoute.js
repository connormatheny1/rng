import * as React from 'react';
import { Button } from '@blueprintjs/core';


class HboTvRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: "",
      randTitle: "",
      pic: "",
      randN: 0,
      year:"",
      isFetching: false,
    };
  }
  
  generateRand = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }  

  callBackendAPI = async () => {
    const response = await fetch('/hbo_shows_route');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };


  getRandRes = () => {
    this.setState({isFetching: true});
    let randoN = this.generateRand(0, 163);
    this.callBackendAPI()
      .then(res => this.setState({ data: res.hbo_shows, randTitle: res.hbo_shows[randoN].title, pic: res.hbo_shows[randoN].artwork_608x342, year:"("+res.hbo_shows[randoN].first_aired.substring(0,4)+")", isFetching:false }))
      .catch(err => console.log(err));
  }
  
  render() {
      return (
        <div className="hbo-data-after">
          <div id="hboTvLeft">
            <div>
              <h1>HBO Go TV</h1>
            </div>
            <Button rightIcon = "random" onClick={ this.getRandRes } id = "hboButton" loading={this.state.isFetching} color="#2cb0e5">Generate</Button>
          </div>  

          <div id="hboTvRight">

            <div>
              <p className="hbo-route-p">{this.state.randTitle} {this.state.year}</p>
            </div>

            <div>
              <img src = {this.state.pic} alt=""></img>
            </div>

          </div>
        </div>
      );
  }
}

export default HboTvRoute;