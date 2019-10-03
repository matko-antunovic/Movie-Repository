import React from 'react'
import "./RandomModal.scss"

const RandomModal = ({open}) => {
    return (
        <div className={`RandomModal ${open ? "show" : null}`}>
           AKO KLIKNE NEK NADE SA KOMEDIJE NEKE
        </div>
    )
}

export default RandomModal
