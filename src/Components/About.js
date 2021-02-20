import React from 'react';
import Shradha from '../assests/shradha.jpg'

function About(props) {
    return (
        <div className="about">
            <h2>A LITTLE BIT ABOUT ME</h2>
            <div className="intro">
                <img className = "profile" src={Shradha} alt="profile"/> 
                <p>Hey! My name is Shradha Agarwal and I'm a web developer with a passion for front end development and design.
                I'm currently a third year student at Jaypee University of Information Technology pursuing Bachelor's degree in Computer Science. 
                I aspire toward a career that will allow me to channel my creativity through crafting beautiful software and engaging experiences.</p> 
            </div>
            <div className="button-box">
                <button><a href="#Projects">See Projects</a></button>
                <button><a href="mailto:shradhaagarwal386@gmail.com">Hire Me</a></button>
            </div>
        </div>
    );
}

export default About;