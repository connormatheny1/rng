import React from "react";
import {Card, Icon, Elevation, Collapse} from "@blueprintjs/core";
import EpisodeButton from './EpisodeButton';

export default class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOpen: false,
            selectedItem: null,
            down: true,
            isFetchingShow: false
        }
    }

    render(){
        const data = this.props.data;
        return(
            <div>
                {
                    data.map((item, i)=> {
                        const { id, title, first_aired} = item;
                        return(
                            <Card key={id} interactive={false} elevation={Elevation.ONE} className="card-list">
                                <h2>{title} <span>({first_aired.substring(0,4)})</span></h2>
                                <Icon icon={this.changeArrow(i, this.props.icon)} iconSize={30} onClick={() => this.setState({ selectedItem: i })} /> 
                                <Collapse isOpen={this.collapse(i)} transitionDuration={500} className="flex-row">
                                    <div>
                                        <EpisodeButton showId={id}></EpisodeButton>
                                    </div>
                                </Collapse>
                            </Card>


                        );
                    })
                }
            </div>
        );
    }

    changeArrow = (i, icon) => {
        const isItemSelected = this.state.selectedItem === i;
        const down = "chevron-down";
        const up = "chevron-up";
        if(icon === down){
            return isItemSelected ?  down : up;
        }
        else{
            return isItemSelected ?  up : down;
        }
    }

    collapse = (i) => {
        const isItemSelected = this.state.selectedItem === i;
        return isItemSelected ?  true : false;
    }
}