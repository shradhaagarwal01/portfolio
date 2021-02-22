import React from 'react';

const Navbar = () => {
    return (
      <nav id='navbar' className='navbar'>
        <ul>
          <li className='navbar__title navbar__item'>
            <a href='#App'>Shradha</a>
          </li>
          <li className='navbar__item'>
            <a href='#About'>About</a>
          </li>
          <li className='navbar__item'>
            <a href='#Skills'>Skills</a>
          </li> 
          <li className='navbar__item'>
            <a href='#Projects'>Projects</a>
          </li>
          <li className='navbar__item'>
            <a href='#Contact'>Contact</a>
          </li>
          <li className='navbar__item'>
            <a href='https://drive.google.com/file/d/1BcYqQDY6afuntcWbg-oNXG91Nq2pVpPs/view?usp=sharing' 
            target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
      </nav>
    );
};
                    

export default Navbar;