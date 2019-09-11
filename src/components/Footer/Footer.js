import React from 'react'
import "./Footer.css"

const Footer = () => {
    return (
        <div className="footer">
            <div>
            <span>Contact</span>
            <span>About Us</span>
            <span>Terms and Services</span>
            <span>Media Center</span>
            <span>Corporate Information</span>
            </div>
            <div>
            <span>Account</span>
            <span>Location</span>
            <span>Investor Relations</span>
            <span>Privacy</span>
            <span>Speed Test</span>
            </div>
            <div>
            <span>Ways to Watch</span>
            <span>Legal Notices</span>
            <span>FAQ</span>
            <span>Help Center</span>
            <span>Built by :<a target="_blank" className="a" href="https://github.com/matko-antunovic/Movie-Repository" rel="noopener noreferrer"> Matko Antunovic</a></span>
            </div>
        </div>
    )
}

export default Footer
