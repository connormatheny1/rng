import React from "react";

export default class RandomEpisode extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render(){
        return(
            <div>
                <p>{this.props.season} {this.props.episode_number}</p>
                <h3>{this.props.epTitle}</h3>
            </div>
        );
    }
}