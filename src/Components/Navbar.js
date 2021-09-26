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
            <a href='https://drive.google.com/file/d/150lOUI8J5UUG3P6AItzYMiDcti5h_K5V/view?usp=sharing' 
            target="_blank" rel="noopener noreferrer">Resume</a>
          </li>
        </ul>
        <div class="header__main-ham-menu-cont">
            <img
              src="./assets/svg/ham-menu.svg"
              alt="hamburger menu"
              class="header__main-ham-menu"
            />
            <img
              src="./assets/svg/ham-menu-close.svg"
              alt="hamburger menu close"
              class="header__main-ham-menu-close d-none"
            />
          </div>
      </nav>
    );
  };
                    

export default Navbar;