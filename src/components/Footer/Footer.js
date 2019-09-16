import React from 'react'
import {FooterContainer,Divs} from "./FooterStyles"

const Footer = () => {
    return (
        <FooterContainer>
            <Divs>
            <span>Contact</span>
            <span>About Us</span>
            <span>Terms and Services</span>
            <span>Media Center</span>
            <span>Corporate Information</span>
            </Divs>
            <Divs>
            <span>Account</span>
            <span>Location</span>
            <span>Investor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
            </Divs>
            <Divs>
            <span>Ways to Watch</span>
            <span>Legal Notices</span>
            <span>FAQ</span>
            <span>Help Center</span>
            <span>Built by :<a target="_blank" className="a" href="https://github.com/matko-antunovic/Movie-Repository" rel="noopener noreferrer"> Matko Antunovic</a></span>
            </Divs>
        </FooterContainer>
    )
}

export default Footer
