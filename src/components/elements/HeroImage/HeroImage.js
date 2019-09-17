import React from 'react';
import {HeroImageStyles,HeroImageText,HeroImageContent} from "./HeroImageStyles"
const HeroImage = (props) => {
    return (
        <HeroImageStyles
        imageUrl={props.image}
        >
            <HeroImageContent>
                <HeroImageText>
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                </HeroImageText>
            </HeroImageContent>
        </HeroImageStyles>
    )
}

export default HeroImage;
