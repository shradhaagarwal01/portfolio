import React from 'react';
import { FaCodepen, FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


function Landing(props) {
    return (
        <div>
            <header className='navbar'>
              <nav>
                <ul>
                  <li className='navbar__title navbar__item'><a href='#App'>Shradha</a></li>
                  <li className='navbar__item'><a href='#About'>About</a></li>
                  <li className='navbar__item'><a href='#Skills'>Skills</a></li>
                  <li className='navbar__item'><a href='#Projects'>Projects</a></li>
                  <li className='navbar__item'><a href='#Contact'>Contact</a></li>
                  <li className='navbar__item'><a href=
                   'https://drive.google.com/file/d/1BcYqQDY6afuntcWbg-oNXG91Nq2pVpPs/view?usp=sharing' 
                   target="_blank" rel="noopener noreferrer">Resume</a></li>
                </ul>
              </nav>    
            </header>
        <div className="container">
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