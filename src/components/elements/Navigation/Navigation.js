import React from 'react'
import {Link} from "react-router-dom"
import {NavigationContainer,NavigationContent} from "./NavigationStyles"

const Navigation = (props) => {
    return (
        <NavigationContainer>
            <NavigationContent>
                <Link to="/">
                    <p>Home</p>
                </Link>
                <p>/</p>
                <p>{props.movie}</p>
            </NavigationContent>
        </NavigationContainer>
    )
}

export default Navigation
