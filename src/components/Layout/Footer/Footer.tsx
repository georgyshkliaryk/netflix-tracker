import React from 'react';
import "./Footer.css";

const Footer = () => {
    return(
        <div className="footer__container">
            <div className="footer__container-fake"></div>
            <div className="footer__container-title">
                NetflixTracker. <br/> <span>2020</span>
            </div>
            <div className="footer__container-links">
                <a href="https://github.com/georgyshkliaryk/netflix-tracker" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://firebase.google.com/" target="_blank" rel="noreferrer">Firebase</a>
                <a href="https://www.netflix.com/browse" target="_blank" rel="noreferrer">Netflix</a>
            </div>
        </div>
    )
}

export default Footer;
