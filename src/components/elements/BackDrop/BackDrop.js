import React from 'react'
import {BackDropStyles} from "./BackDropStyles"


const BackDrop = ({bck,handleClick}) => {
 
    return (
        <BackDropStyles onClick={handleClick} bck={bck}/>
    )
}
export default BackDrop
