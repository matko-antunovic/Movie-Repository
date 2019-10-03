import React from 'react'
import "./RandomModal.scss"

const RandomModal = ({open}) => {
    return (
        <div className={`RandomModal ${open ? "show" : null}`}>
           find some random comedy
        </div>
    )
}

export default RandomModal
