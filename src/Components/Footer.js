import React from 'react';
import { FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare, FaMedium } from 'react-icons/fa';

function Footer() {
    return (
        <div className="footer">
            <div className="social">
                <a href="mailto:shradhaagarwal386@gmail.com" className="social"><FaEnvelopeSquare/></a>
                <a href="https://www.linkedin.com/in/shradhaagarwal01/" className="social" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/shradhaagarwal01" className="social" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                <a href="https://twitter.com/dilkipatang" className="social" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
                <a href="https://medium.com/@shradhaagarwal01" className="social" target="_blank" rel="noopener noreferrer"><FaMedium/></a>
            </div>
            <h2>Copyright © 2021, Shradha Agarwal; all rights reserved.</h2>
        </div>
    );
}

export default Footer;
