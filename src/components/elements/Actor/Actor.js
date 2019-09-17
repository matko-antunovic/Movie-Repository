import React from 'react'
import {IMAGE_BASE_URL} from "../../../config"
import {ActorCharacter,ActorStyles,ActorName} from "./ActorStyles"

const Actor = (props) => {
    const POSTER_SIZE = "w154";
    return (
        <ActorStyles>
            <img
            src={props.actor.profile_path ? `${IMAGE_BASE_URL}${POSTER_SIZE}${props.actor.profile_path}` : "./images/no_image.jpg"}
            alt="actor"
            />
            <ActorName>{props.actor.name}</ActorName>
            <ActorCharacter>{props.actor.character}</ActorCharacter>
        </ActorStyles>
    )
}

export default Actor
