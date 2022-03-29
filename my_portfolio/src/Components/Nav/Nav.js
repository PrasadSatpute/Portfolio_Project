import './NavStyle.css'
import HomeICON from '../IMG/home.png'
import ProfileICON from '../IMG/profile.png'
import EducationICON from '../IMG/education.png'
import ResumeICON from '../IMG/resume.png'
import ContactICON from '../IMG/contact.png'
import MenuICON from '../IMG/menu.png'


import React, { useState } from 'react';

function Navbar() {
  const span = document.querySelector("toggleMenu");
  const toggleClass = document.getElementsByClassName("menu-item");
  const tClass = toggleClass.classList;

const toggleNav = () => {
  console.log("Click Nav")
  toggleClass.className = "toggel-menu-item";
  }

  const [navbar,setNavbar] = useState(false)

  const changeBackgraoundNav = () => {
    if(window.scrollY >= 80){
      setNavbar(true)
    }
    else{
      setNavbar(false)
    }
  }

  window.addEventListener('scroll',changeBackgraoundNav);

  return (
    <nav className={navbar ? 'Navbar black' : 'Navbar'}>
      <div className='menu-icon'>
        <img className='toggleMenu' src={MenuICON}></img>
      </div>
      <div className='menu-item'>
        <ul className="nav-links">
            <li><a href='#Home' className='links cool-link'><img src={HomeICON}></img><h3>HOME</h3></a></li>
            <li><a href='#Project' className='links cool-link'><img src={ProfileICON}></img><h3>ABOUT</h3></a></li>
            <li><a href='#Project' className='links cool-link'><img src={EducationICON}></img><h3>EDUCATION</h3></a></li>
            <li><a href='#Project' className='links cool-link'><img src={ResumeICON}></img><h3>RESUME</h3></a></li>
            <li><a href='#Project' className='links cool-link'><img src={ContactICON}></img><h3>CONTACT</h3></a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
