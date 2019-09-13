import React from 'react'
import "./SideCart.css"
import {connect} from "react-redux"
import WatchlistElement from "../WatchlistElement/WatchlistElement"
import {withRouter} from "react-router-dom"
import {removeFromWatchlist} from "../../../actions/movieActions"

const SideCart = ({show,onClose,movies,history,removeFromWatchlist}) => {

    const handleClick=(id)=>{
        history.push(`/${id}`)
    }

    return (
        <div className={`sidecart ${show ? "show" : null} `}>
            <div className="sidecart-elements">
                <span className="close" onClick={onClose}>&#9932;</span>
                {movies.map((movie,i)=><div className="sidecart-element" key={i}><WatchlistElement removeFromWatchlist={removeFromWatchlist} handleClick={handleClick} movie={movie} /></div>)}
                
            </div>
        </div>
    )
}

const mapStateToProps=state=>({
    movies:state.movie.watchlist
})

const mapDispatchToProps=dispatch=>({
    removeFromWatchlist:(id)=>{dispatch(removeFromWatchlist(id))}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SideCart))