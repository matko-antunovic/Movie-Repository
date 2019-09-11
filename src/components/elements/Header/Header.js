import React from 'react';
import "./Header.css";
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <div className="rmdb-header">
         <div className="rmdb-header-content">
             <Link to="/">
             <img className="rmdb-logo" src="../images/reactMovie_logo.png" alt="rmdb-logo"/>
             </Link>
            <span className="watchlist">My Watchlist</span>
         </div>
        </div>
    )
}

export default Header;
