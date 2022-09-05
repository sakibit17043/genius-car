import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {  faCopyright } from '@fortawesome/free-solid-svg-icons'
import "./Footer.css"
const Footer = () => {
    const today = new Date();
    const year = today.getFullYear()
    return (
        <footer>
            <p><small>copyright <FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon> {year}</small></p>
        </footer>
        
    );
};

export default Footer;