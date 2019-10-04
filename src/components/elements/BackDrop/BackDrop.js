import React from 'react'
import "./BackDrop.scss"


const BackDrop = ({bck,handleClick}) => {
    console.log(bck)
    return (
        <div onClick={handleClick} className={`${bck && "backdrop"}`}>
            
        </div>
    )
}
export default BackDrop
