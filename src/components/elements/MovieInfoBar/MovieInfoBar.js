import React from 'react'
import FontAwesome from "react-fontawesome"
import {calcTime, convertMoney} from "../../../helpers"
import {MovieInfoBarStyles,MovieInfoBarContent,MovieInfoBarContentColumn,MovieInfoBarInfo} from "./MovieInfoBarStyles"

const MovieInfoBar = ({time,budget,revenue}) => {

    return (
        <MovieInfoBarStyles>
         <MovieInfoBarContent>
             <MovieInfoBarContentColumn>
                 <FontAwesome className="fa-time" name="clock-o" size="2x" style={{marginTop:".3rem"}}/>
                 <MovieInfoBarInfo>Running time:{calcTime(time)}</MovieInfoBarInfo>
             </MovieInfoBarContentColumn>
             <MovieInfoBarContentColumn>
                 <FontAwesome className="fa-budget" name="money" size="2x" style={{marginTop:".3rem"}}/>
                 <MovieInfoBarInfo>Budget: {convertMoney(budget)}</MovieInfoBarInfo>
             </MovieInfoBarContentColumn>
             <MovieInfoBarContentColumn>
                 <FontAwesome className="fa-revenue" name="ticket" size="2x" style={{marginTop:".3rem"}}/>
                 <MovieInfoBarInfo>Revenue:{convertMoney(revenue)}</MovieInfoBarInfo>
             </MovieInfoBarContentColumn>
         </MovieInfoBarContent>
        </MovieInfoBarStyles>
    )
}

export default MovieInfoBar
