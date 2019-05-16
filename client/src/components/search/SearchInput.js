import React from 'react';
import { InputGroup } from "@blueprintjs/core";

export default class SearchInput extends React.Component{
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const term = e.target.value;
        this.props.onChange(term);
    }    

    render(){
        const inputStyle = {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            margin: 0,
            boxSizing: 'border-box'
        }
        return(
            <div>
                <InputGroup
                    large={true}
                    leftIcon="search"
                    onChange={this.handleChange}
                    placeholder='Search'
                    type = "input"
                    style={inputStyle}
                    id="input"
                />
            </div>
        );
    }
}