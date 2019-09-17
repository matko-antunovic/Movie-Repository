import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import{SearchBarContainer,SearchBarContent,SearchBarInput,FaSearch} from "./SearchStyles"

class SearchBar extends Component {
    state={
        search:""
    }
    
    timeout=null;


    handleInput=(evt)=>{
        evt.preventDefault();
        this.setState({
            search:evt.target.value
        })
        clearTimeout(this.timeout);

        this.timeout=setTimeout(()=> {
            this.props.search(this.state.search);
        },500)
    }

    render() {
        return (
            <SearchBarContainer>
                <SearchBarContent>
                <FaSearch> <FontAwesome  name="search" size="2x" /></FaSearch>
               
                <SearchBarInput
                 type="text"
                onChange={this.handleInput}
                value={this.state.search}
                placeholder="Search Movies"
                />
                </SearchBarContent>
            </SearchBarContainer>
        )
    }
}
export default SearchBar;