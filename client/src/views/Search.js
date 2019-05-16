import React from "react";
import SearchButton from "../components/search/SearchButton";
import  SearchInput from "../components/search/SearchInput";
import  SearchResults from "../components/search/SearchResults";
import { H3 } from "@blueprintjs/core";
import SearchDisplay from "../components/styled/SearchDisplay";
export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchTerm: '',
            isFetching: false
        }
        this.getUserInput = this.getUserInput.bind(this);
        this.getData = this.getData.bind(this);
    }

    getUserInput(term){
        this.setState({ searchTerm: term });
    }

    getData(newData, epNums){
        this.setState({ data: newData, isFetching: true, epNums: epNums });
    }

    render(){
        return(
            <div>
                <H3 className="text-center">Search for a specific TV show to generate a random episode</H3>
                <SearchDisplay>
                    <SearchInput onChange={this.getUserInput} />
                    <SearchButton searchTerm={this.state.searchTerm} getData={this.getData} />
                </SearchDisplay>
                <SearchResults data={this.state.data} />
            </div>
        );
    }
}