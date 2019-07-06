import React, { Component } from 'react';
import FontAwesome from "react-fontawesome";
import "./SearchBar.css";

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
            <div className="rmdb-searchbar">
                <div className="rmdb-searchbar-content">
                <FontAwesome className="rmdb-fa-search" name="search" size="2x" />
                <input
                 type="text"
                className="rmdb-searchbar-input"
                onChange={this.handleInput}
                value={this.state.search}
                placeholder="Search Movies"
                />
                </div>
            </div>
        )
    }
}
export default SearchBar;