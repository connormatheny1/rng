import React, { Component } from "react";
import { Button, Icon } from '@blueprintjs/core';
// import MainButton from '../components/MainButton'


let armstrong = require('../images/armstrong.jpg');
let bellTower = require('../images/bellTower.jpg');
let dividends = require('../images/dividends.jpg');
let king = require('../images/king.jpg');
let maple = require('../images/maple.jpg');
let market = require('../images/market.jpg');
let martin = require('../images/martin.jpg');
let proShop = require('../images/proShop.jpg');
let western = require('../images/western.jpg');
let garden = require('../images/garden.jpg');
let dorsey = require('../images/dorsey.jpg');
let withrow = require('../images/withrow.jpg');


class MiamiDining extends Component {
  constructor(props) {
    super(props);
    this.state = {
      min: 0,
      max: 11,
      name: "",
      pic: null,
      address: "",
      hours: null,
      link: "",
      isFetching: false
    }
    this.getDiningHall = this.getDiningHall.bind(this);
  }

  componentDidMount() {
    this.setState({ name: this.state.name, pic: this.state.pic});
  }
  
  generateNumber = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }

  getDiningHall = () => {
    this.setState({isFetching:true});
    let diningHalls = [
      "Armstrong Student Center",
      "Bell Tower Place",
      "Dividends",
      "King Café",
      "Maplestreet Station",
      "Market Street at MacCracken",
      "Martin Dining Commons",
      "The Pro Shop",
      "Western Dining Commons",
      "Garden Commons",
      "Dorsey Market",
      "Withrow Starbucks"
    ];

    let pics = [
      armstrong,
      bellTower,
      dividends,
      king,
      maple,
      market,
      martin,
      proShop,
      western,
      garden,
      dorsey,
      withrow
    ];

    let addresses = [
      "550 E Spring Street",
      "401 E High Street",
      "800 E High Street",
      "151 S Campus Avenue",
      "571 Maple Street",
      "500 Center Drive",
      "5397 Bonham Road",
      "750 S Oak Street",
      "480 Western Drive",
      "95 N Patterson Avenue",
      "900 E High Street",
      "100 Tallawanda Road"
    ];

    let links = [
      "https://miamioh.edu/campus-services/dining/places-to-eat/armstrong/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/bell-tower/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/dividends/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/king-cafe/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/maple-street/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/market-street/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/martin-dining-commons/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/pro-shop/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/western-dining-common/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/garden-commons/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/dorsey/index.html",
      "https://miamioh.edu/campus-services/dining/places-to-eat/withrow-starbucks/index.html"
    ];

    let randN = this.generateNumber(this.state.min, this.state.max);
    let randHall = diningHalls[randN];
    let hallPic = pics[randN];
    let address = addresses[randN];
    let link = links[randN];

    this.setState({
      name: randHall,
      pic: hallPic,
      address: address,
      link: link,
      isFetching: false,
      moreInfo: "More info",
    });
  }



  render() {
    return (
      <div className="hbo-data-after">
          <div id="left">
          <div>
            <h1 style={{color: '#DB1A35'}}>Miami Dining Halls</h1>
          </div>

          <div>
            <Button id = "diningButton" onClick={this.getDiningHall} loading={this.state.isFetching}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                Generate
                <Icon icon="random" color={'white'} style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:31, paddingTop:3}}/>
              </div>
            </Button>
          </div>
          
          </div>  
          <div id="right">
            <p className="hbo-route-p">{this.state.name}</p>
            {/* <p className="hbo-route-p">{this.state.address}</p> */}
            <p><a href = {this.state.link} rel = "noopener noreferrer" target="_blank">{this.state.moreInfo}</a></p>
            <img src = {this.state.pic} alt=""></img>  
          </div>
        </div>
    );
  }
}

export default MiamiDining;



















    /*
    <div className="miami-content">

        <div className = "outer-panel">
          <div className = "inner-panel">
            <div className = "inner-left">
              <div className = "inner-left-top">
                <h2>Click below to get a random Miami Dining Hall</h2>
                <Button className="generate" type="submit" value="Generate Dining Hall" onClick={ this.getDiningHall }>
                  Generate Random Dining Hall
                </button>
                
              </div>

              <div className = "inner-left-middle">
                <h3 id="rNum">
                  { this.state.name }
                </h3>
              </div>

              
            </div>

            <div className = "inner-right">
              <div className="inner-right-top">
                <img src = { pic } alt = "generated dining hall"></img>
              </div>

              <div className = "inner-right-bottom">
                <div className = "inner-right-b-l">
                  <h3>Hours:</h3>
                  <ul>
                    <li>There</li>
                    <li>are</li>
                    <li>so</li>
                    <li>many</li>
                    <li>hours</li>
                  </ul>
                </div>
                <div className = "inner-right-b-r">
                  <div className = "address">
                    <h3>Address:<br></br></h3>
                    <p>{this.state.address}</p>
                  </div>
                  <div className = "more-info">
                    <h3>More info:</h3>
                    <p><a href = {this.state.link} rel = "noopener noreferrer" target="_blank">Click here for more information</a></p>
                  </div>

                </div>
              </div>


              
                457 228
                   What up kemosabe, enjpoyng thr diyr? < that was supposed to say enjoying the site? but i typed it while my roommate showed me a neat pic on instagram 
                
                   </div>
                   </div>
                 </div>
               </div>
    code in case I want to use inputs
    // getDiningHallHours = (hall) => {}
    /*getInputs = () => {
      if(this.state.min > this.state.max ){
        const minTemp = this.state.min
        const maxTemp = this.state.max
        this.setState(
        { 
          min: maxTemp,
          max: minTemp
        }, () =>
          this.setState({
            number: this.generateNumber(this.state.min, this.state.max)  
          })
        );
      } else {
        this.setState({
          number: this.generateNumber(this.state.min, this.state.max)  
        })
      }
    }/*
    HTML: 
    <input id="min" min="-9999999999" max="9999999999" type="number" value={ this.state.min } onChange={this.minChange} />
    <input id="max" min="-9999999999" max="9999999999" type="number" value={ this.state.max } onChange={this.maxChange} />
    */
