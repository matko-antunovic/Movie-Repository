import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";
import SideCart from "../SideCart/SideCart.js"
class Header extends React.Component {

    state={
        show:false
    }

    onClose=()=>{
        this.setState({
            show:!this.state.show
        })
    }

    render(){
        return (
            <React.Fragment>
            <div className="rmdb-header">
             <div className="rmdb-header-content">
                 <Link to="/">
                 <img className="rmdb-logo" src="../images/reactMovie_logo.png" alt="rmdb-logo"/>
                 </Link>
                <span onClick={()=>{this.setState({show:!this.state.show})}} className="watchlist">My Watchlist</span>  
             </div>
            </div>
             <SideCart show={this.state.show} onClose={this.onClose}/>
             </React.Fragment>
        )
    }
}

export default Header;
