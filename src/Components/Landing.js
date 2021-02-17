import React from 'react';
import { FaCodepen, FaEnvelopeSquare, FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa';


function Landing(props) {
    return (
        <div>
            <header className='navbar'>
                <div className='navbar__title navbar__item'><a href='../App.js'>Shradha</a></div>
                <div className='navbar__item'><nav><a href='./About.js'>About</a></nav></div>
                <div className='navbar__item'><nav><a href='./Skills.js'>Skills</a></nav></div>
                <div className='navbar__item'><nav><a href='./Projects.js'>Projects</a></nav></div>    
                <div className='navbar__item'><nav><a href='./Contact.js'>Contact</a></nav></div>
                <div className='navbar__item'><nav><a href='https://drive.google.com/file/d/1ESbD1qGv6fHjgVMxIXDqp_8HPsWlS3Bd/view' 
                target="_blank" rel="noopener noreferrer">Resume</a></nav></div>      
            </header>
        <div class="container">
          <div class="bg-img"></div>
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