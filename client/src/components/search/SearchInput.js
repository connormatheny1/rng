import React from 'react';
import { handleStringChange } from "@blueprintjs/docs-theme";
import { InputGroup, Intent, Button, H3} from "@blueprintjs/core";

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.
    }
    handleChange = handleStringChange(searchInput => this.setState({ searchInput }));
    render(){
        return(
            <div>
                <H3 className="text-center">Search for a specific TV show to generate a random episode</H3>
                    <InputGroup
                        large={large}
                        leftIcon="search"
                        rightElement = {
                            <Button 
                                minimal={true} 
                                icon="arrow-right" 
                                intent={Intent.PRIMARY}
                                loading={this.state.isFetching}
                                onClick={this.getSearch.bind(this, this.state.searchInput)}
                                type="submit"
                            /> }
                        onChange={this.handleChange}
                        placeholder={placeholder}
                        type = "input"
                        style={inputStyle}
                        id="input"
                    >
                    </InputGroup>   
            </div>
        );
    }
}