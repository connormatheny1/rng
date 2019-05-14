import React from "react";
import SearchRoute from "../api/SearchRoute";

export default class Search extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data: [],
            searchTerm: ''
        }
    }
    render(){
        return(
            <SearchRoute></SearchRoute>
        );
    }
}