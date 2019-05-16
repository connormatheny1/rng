import React from 'react';
import { Button } from "@blueprintjs/core";

export default class EpisodeButton extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            epNums: 0,
            epTitle: "",
            season: "",
            episode_number: "",
            randN: 0,
            isFetching: false
        }
    }

    generateRand = (min, max) => {
        return Math.floor(Math.random()*(max-min+1)+min)
    }

    episodeCall = async (showId) => {
        let route = '/random_search/' + showId;
        const response = await fetch(route);
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    }

    getRandEpisodeNums = (showId) => {
        this.setState({ season: null, episode_number: null, epTitle: "", isFetching: true});
        this.episodeCall(showId)
          .then(res => this.setState({epNums: res.num.total_results, randN: this.generateRand(0, (this.state.epNums - 1))}, () => {
              this.setState({ epTitle: res.episode[this.state.randN].title, season: "Season " + res.episode[this.state.randN].season_number, episode_number: "Episode " + res.episode[this.state.randN].episode_number, isFetching: false});
          }))
          .catch(err => console.log(err)); 
    }

    render(){
        return(
            <div className="flex-row">
                <Button
                    rightIcon="random"
                    onClick={this.getRandEpisodeNums.bind(this, this.props.showId)}
                    loading={this.state.isFetching}
                    >
                    Random Episode
                </Button>
                <div>
                    <h2>{this.state.epTitle}</h2>
                    <p>{this.state.season} {this.state.episode_number}</p>
                </div>
            </div>
        );
    }
}