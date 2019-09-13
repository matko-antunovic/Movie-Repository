import React from "react";
import "./Add.css"

const Add=({addToWatchlist})=>{
   return <button onClick={addToWatchlist} className="rmdb-watchlist"> + ADD TO WATCHLIST</button>
}

export default (Add);