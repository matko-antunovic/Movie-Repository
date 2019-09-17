import React from 'react'
import {connect} from "react-redux"
import WatchlistElement from "../WatchlistElement/WatchlistElement"
import {withRouter} from "react-router-dom"
import {removeFromWatchlist} from "../../../actions/movieActions"
import {SideCartContainer,SideCartClose,SideCartElement,SideCartElements} from "./SideCartStyles"
const SideCart = ({show,onClose,movies,history,removeFromWatchlist}) => {

    const handleClick=(id)=>{
        history.push(`/${id}`)
    }

    return (
        <SideCartContainer show={show}>
            <SideCartElements>
                <SideCartClose onClick={onClose}>&#9932;</SideCartClose>
                {movies.map((movie,i)=>
                <SideCartElement key={i}>
                    <WatchlistElement
                     removeFromWatchlist={removeFromWatchlist}
                      handleClick={handleClick}
                       movie={movie}/>
                       </SideCartElement>)}
                
            </SideCartElements>
        </SideCartContainer>
    )
}

const mapStateToProps=state=>({
    movies:state.movie.watchlist
})

const mapDispatchToProps=dispatch=>({
    removeFromWatchlist:(id)=>{dispatch(removeFromWatchlist(id))}
})

export default connect(mapStateToProps,mapDispatchToProps)(withRouter(SideCart))