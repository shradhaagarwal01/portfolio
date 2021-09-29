import React from 'react';
import SmartBrain from '../assests/SmartBrain.PNG'
import RoboFriends from '../assests/RoboFriends.PNG'
import DrumKit from '../assests/DrumKit.PNG'
import Tilt from 'react-tilt'

const Projects = () => {
  return (
    <section id='Projects'>
        <div className="projects">
           <h2>WHAT I HAVE DONE</h2>
           <div>
                <h3>SMART BRAIN</h3>
                <div  className="project">
                  <Tilt className="Tilt" options={{ max : 5 }}>
                    <div className="Tilt-inner"><a href="https://shradha-smart-brain.herokuapp.com/"
                    target="_blank" rel="noopener noreferrer"><img src={SmartBrain} alt="project"/></a></div>
                  </Tilt>
                  <div className="description">
                      <p>
                      Smart-Brain uses Clarifai API to detect face in an image.
                      It helps to detect face in a picture provided by user through URL of image.
                      User's rank gets upgraded everytime user detects image in a picture.
                      </p>
                    <div className="button-box">
                        <button><a target="_blank" rel="noopener noreferrer" href="https://shradha-smart-brain.herokuapp.com/">
                        See Live
                        </a></button>
                        <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/shradhaagarwal01/Smart-Brain">
                        Source Code
                        </a></button>
                    </div>
                  </div>
                </div>
            </div>
            <div>
                <h3>ROBOFRIENDS</h3>
                <div  className="project">
                <div className="description">
                <div>
                  <p>
                  RoboFriends is a ReactJS web application, a Card UI is used for
                   different users' information, where the user can search for robot friends among all.
                   This project was created with HTML5, CSS3, JavaScript, React, Redux, tachyons, Clarifai API, and Robohash API.
                  </p>
                </div>
                <div className="button-box">
                    <button><a target="_blank" rel="noopener noreferrer" href="https://shradhaagarwal01.github.io/RoboFriends/">
                    See Live
                    </a></button>
                    <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/shradhaagarwal01/RoboFriends">
                    Source Code
                    </a></button>
                </div>
                </div>
                <Tilt className="Tilt" options={{ max : 5 }}>
                <div className="Tilt-inner"><a href="https://shradhaagarwal01.github.io/RoboFriends/"
                target="_blank" rel="noopener noreferrer"><img src={RoboFriends} alt="project"/></a></div>
                </Tilt>
                </div>
            </div>
            <div>
                <h3>DRUM KIT</h3>
                <div  className="project">
                <Tilt className="Tilt" options={{ max : 5 }}>
                <div className="Tilt-inner"><a href="https://shradhaagarwal01.github.io/Drum-Kit/"
                target="_blank" rel="noopener noreferrer"><img src={DrumKit} alt="project"/></a></div>
                </Tilt>
                <div className="description">
                <div>
                  <p>
                  Drum Kit is a JavaScript project in which keyboard keys can be used to play the drum. HTML, CSS and JavaScript is being used.
                  </p>
                </div>
                <div className="button-box">
                    <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/shradhaagarwal01/Drum-Kit">
                    See Live
                    </a></button>
                    <button><a target="_blank" rel="noopener noreferrer" href="https://github.com/shradhaagarwal01/Smart-Brain">
                    Source Code
                    </a></button>
                </div>
                </div>
                </div>
            </div>
        </div>
        </section>
   );
};
export default Projects;
