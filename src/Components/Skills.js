import React from 'react';

function Skills(props) {
    return (
        <div id="Skills" className="skills">
            <h2>SKILLS</h2>
            <p>I've been doing web development for about 1 year now, and I'm always eager to learn more in this fast paced industry.</p>
            <div className="grid">
                <div>
                    <h3>LANGUAGES</h3>
                    <ul className="list">
                    <li>Python</li>
                    <li>C & C++</li>
                    <li>JavaScript</li>
                    </ul>
                </div>
                <div>
                    <h3>TECHNOLOGIES</h3>
                    <ul className="list">
                    <li>HTML & CSS</li>
                    <li>ReactJS</li>
                    <li>JavaScript</li>
                    <li>ExpressJS</li>
                    <li>Node.js</li>
                    </ul>
                </div>
                <div>
                    <h3>TOOLS</h3>
                    <ul className="list">
                    <li>Git & Github</li>
                    <li>Chrome DevTools</li>
                    <li>Postman</li>
                    <li>MongoDB</li>
                    <li>SQL (MYSQL, PostgreSQL)</li>
                    </ul>
                </div>
            </div>
            <div className="resume-button">
                <button><a href='https://drive.google.com/file/d/1BcYqQDY6afuntcWbg-oNXG91Nq2pVpPs/view?usp=sharing'
                target="_blank" rel="noopener noreferrer">Grab A Copy of my Resume</a></button>
            </div>
        </div>
    );
}

export default Skills;
