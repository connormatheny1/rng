import React from "react";
import { Button, Intent } from "@blueprintjs/core";

export default class SearchResults extends React.Component{
    constructor(props){
        super(props);
        this.state={
            data: [],
            epNums: 0
        }
    }

    showCall = async (term) => {
        let route = '/episode_search/' + term;
        const response = await fetch(route);
        const body = await response.json();
        if (response.status !== 200) {
          throw Error(body.message) 
        }
        return body;
    }

    getSearch = async (term) => {
        this.setState({isFetching: true});
        this.showCall(term)
            .then(res => this.setState({ data: res.show, isFetching: false }, () => {
                this.props.getData(this.state.data)
            }))
            .catch(err => console.log(err));
    }

    render(){
        return(
            <Button
                id=""
                icon="arrow-right" 
                intent={Intent.PRIMARY}
                loading={this.state.isFetching}
                onClick={this.getSearch.bind(this, this.props.searchTerm)}
            >Search</Button>
        );
    }
}