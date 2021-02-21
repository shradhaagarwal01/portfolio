import React from 'react';
import { FaCodepen, FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';
import Navbar from './Navbar'


function Landing(props) {
    return (
        <div>
        <Navbar/>
        <div id="App" className="container">
          <div className="bg-img"></div>
          <div className="bottom-right">HI, I'M SHRADHA!</div>
          <div>
            <p className="alignment-top">And I might be the developer</p>
            <p className="alignment-bottom">you are looking for.</p>
          </div>
          <div className="bottom-left">
                <a href="mailto:shradhaagarwal386@gmail.com" className="social"><FaEnvelopeSquare/></a>
                <a href="https://www.linkedin.com/in/shradhaagarwal01/" className="social" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a href="https://github.com/shradhaagarwal01" className="social" target="_blank" rel="noopener noreferrer"><FaGithubSquare /></a>
                <a href="https://twitter.com/dilkipatang" className="social" target="_blank" rel="noopener noreferrer"><FaTwitterSquare/></a>
                <a href="https://codepen.io/shradhaagarwal" className="social" target="_blank" rel="noopener noreferrer"><FaCodepen/></a>
          </div>
        </div>
    </div>
    );
}

export default Landing;
