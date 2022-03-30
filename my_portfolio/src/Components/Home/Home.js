import './HomeStyle.css'

import MyImg from '../IMG/MyImg.jpg'

import TypeWriter from './TypeWriter/TypeWriter';

import whatsapp from '../IMG/Social/w.png'
import facebook from '../IMG/Social/f.png'
import instagram from '../IMG/Social/i.png'
import linkedin from '../IMG/Social/l.png'
import github from '../IMG/Social/g.png'
import twiter from '../IMG/Social/t.png'

function Home() {
  return (
    <div className="HomePage" id='Home'>
      <div className='aboutMeBox'>
        <div className='MyImgDiv'><div className='MyIMG'></div></div>
        <div className='MyInfoDiv'>
          <h3>Hi Fellow!</h3>
          <h1>I'm 
            <b className='nameHover iName'> P</b>
            <b className='nameHover'>r</b>
            <b className='nameHover'>a</b>
            <b className='nameHover'>s</b>
            <b className='nameHover'>a</b>
            <b className='nameHover'>d</b>
            <b> </b>
            <b className='nameHover iName'>S</b>
            <b className='nameHover'>a</b>
            <b className='nameHover'>t</b>
            <b className='nameHover'>p</b>
            <b className='nameHover'>u</b>
            <b className='nameHover'>t</b>
            <b className='nameHover'>e</b>
          </h1>
          <h5 className='aboutDescription'>I am passionate about Frontend and Backend Technology 
            to create awesome user experiences. Five years of experience
            in <b>HTML+CSS+JS</b> to create awesome user interface.
            Also Work in backend Technology <b>JAVA</b></h5>
            <h1>I'm a 
              <span className="cool-line">
                <TypeWriter></TypeWriter>
              </span>
            </h1>
          </div>
      </div>
      <div className='socialLinkBox'>
        <h2>Get in Touch</h2>
        <p>Whether you want to get in touch, or talk about a project collaboration.</p>
        <b>Feel free to connect with me</b>
        <ul>
          <li className='socialIcon'><a href='https://ultramsg.com/m/3DoGu8z'><img src={whatsapp}></img></a></li>
          <li className='socialIcon'><a href='https://instagram.com/prasad.bme/'><img src={instagram}></img></a></li>
          <li className='socialIcon'><a href='https://www.linkedin.com/in/prasad-satpute-7682b0148/'><img className='linkedinIcon' src={linkedin}></img></a></li>
          <li className='socialIcon'><a href='https://github.com/PrasadSatpute'><img src={github}></img></a></li>
          <li className='socialIcon'><a href='https://twitter.com/PRASADSATPUTE18'><img src={twiter}></img></a></li>
          <li className='socialIcon'><a href='#'><img src={facebook}></img></a></li>
        </ul>
      </div>
    </div>
  );
}

export default Home;
