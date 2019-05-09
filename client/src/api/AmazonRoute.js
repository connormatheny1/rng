import * as React from 'react';
import { Button, Switch, Icon, H6, H5 } from '@blueprintjs/core';
import { FocusStyleManager } from "@blueprintjs/core";
 
FocusStyleManager.onlyShowFocusOnTabs();

class AmazonRoute extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: "",
      epTitle: "",
      randTitle: "",
      epNums: 0,
      pic: "",
      randN: 0,
      year:"",
      showId: 0,
      isFetching: false,
      isChecked: false,
      hasRendered: false,
      season: null,
      episode_number:null,
      display: 'none'
    };
  }

  generateRand = (min, max) => {
    return Math.floor(Math.random()*(max-min+1)+min)
  }  

  handleChange = () => {
    if(this.state.isChecked){
      this.setState({ isChecked:false,  display: 'none'});
    }
    else{
      this.setState({ isChecked:true });
    }
  }

  callBackendAPI = async () => {
    let route;
    if(this.state.isChecked){
      route = '/prime_shows';
    }
    else{
      route = '/prime_movies';
    }
    const response = await fetch(route);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  episodeCall = async (showId) => {
    let route = '/prime_episode/' + showId;
    const response = await fetch(route);
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  }

  getRandRes = () => {
    this.setState({isFetching: true, hasRendered: false, epNums: 0, epTitle: "", season: "", episode_number: ''});
    let randoN = this.generateRand(0, 249);
    if(this.state.isChecked){
      this.callBackendAPI()
        .then(res => this.setState({ showId: res.prime_shows[randoN].id, randTitle: res.prime_shows[randoN].title, pic: res.prime_shows[randoN].artwork_608x342, year:"("+res.prime_shows[randoN].first_aired.substring(0,4)+")", isFetching:false, hasRendered: true, randN: randoN, display: 'flex' }))
        .catch(err => console.log(err));
    }
    else{
      this.callBackendAPI()
        .then(res => this.setState({ data: res.prime_movies, randTitle: res.prime_movies[randoN].original_title, pic: res.prime_movies[randoN].poster_400x570, year:"("+res.prime_movies[randoN].release_year+")", isFetching:false, display: 'none' }))
        .catch(err => console.log(err));
    }
  }

  getRandEpisode = (showId) => {
    const randoN = this.generateRand(0, (this.state.epNums - 1));
    this.episodeCall(showId)
      .then(res => this.setState({data: res.rand_episode, epNums: res.num.total_results, epTitle: res.rand_episode[randoN].title, season: "Season " + res.rand_episode[randoN].season_number, episode_number: "Episode " + res.rand_episode[randoN].episode_number,hasRendered: true, isFetching: false }))
      .catch(err => console.log(err)); 
  }
  
  render() {
    const header = this.state.isChecked ? "Shows" : "Movies";
    return (
      <div className="hbo-data-after">
      <div className="left-half">
        <div id="amazonLeft">
          <div style={{color: '#FF9800'}}>
            <h1>Amazon Prime {header}</h1>
          </div>
          <div>
            <Button id = "amazonButton" onClick={this.getRandRes} loading={this.state.isFetching}>
              <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                Generate
                <Icon icon="random" color={'#FF9800'} style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:31, paddingTop:3}}/>
              </div>
            </Button>
          </div>
          <Switch 
            onClick={this.handleChange} 
            innerLabel="Movies"
            innerLabelChecked="TV"
            style={{outline:0}}
            large={true}
          />
        </div>  
        </div>
        <div className="right-side">
          <div>
              <p className="hbo-route-p">{this.state.randTitle} {this.state.year}</p>
              <img src = {this.state.pic} alt=""></img> 
            </div>
            <div className="episode-container" style={{display: this.state.display}}>
                <div style={{display:'flex', flexDirection:'column', justifyContent:'flex-start', alignItems:'flex-start', marginRight:30}}>
                  <H6>Random Episode?</H6>
                  <Button onClick={this.getRandEpisode.bind(this, this.state.showId)}
                    id = "amazonShowButton"
                    loading={this.state.isFetching}>
                      <div style={{display:'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', width:140}}>
                        Generate
                        <Icon icon="random" color={'#FF9800'}  style={{display:'flex', flexDirection:'row', alignItems:'center',justifyContent:'center',height:25, paddingTop:1}}/>
                      </div>
                  </Button>
                </div>
              <div className="epInfo">
                <p>{this.state.season} {this.state.episode_number}</p>
                <H5>{this.state.epTitle}</H5>
              </div>
          </div>
        </div>
      </div>
    );
  }
}
export default AmazonRoute;