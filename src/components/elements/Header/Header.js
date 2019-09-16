import React from 'react';
import {Link} from "react-router-dom";
import SideCart from "../SideCart/SideCart.js"
import {HeaderStyles,HeaderContent,Watchlist,Logo} from "./HeaderStyles"
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
            <HeaderStyles>
             <HeaderContent>
                 <Link to="/">
                 <Logo src="../images/reactMovie_logo.png" alt="rmdb-logo"/>
                 </Link>
                <Watchlist onClick={()=>{this.setState({show:!this.state.show})}}>My Watchlist</Watchlist>  
             </HeaderContent>
            </HeaderStyles>
             <SideCart show={this.state.show} onClose={this.onClose}/>
             </React.Fragment>
        )
    }
}

export default Header;
