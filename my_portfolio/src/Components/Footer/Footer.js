import './Footer.css'

import Copyright from '../IMG/copyright.png'
import whatsapp from '../IMG/Social/w.png'
import facebook from '../IMG/Social/f.png'
import instagram from '../IMG/Social/i.png'
import linkedin from '../IMG/Social/l.png'
import github from '../IMG/Social/g.png'
import twiter from '../IMG/Social/t.png'

function Footer() {
  return (
    <div className="FooterPage" id='Footer'>
      <p>Developed by Prasad Satpute</p>
      <p>Copyright <img src={Copyright}></img> 2022</p>
      <p className='socialIcon'>
        <ul>
          <li className='socialIcon'><a href='https://ultramsg.com/m/3DoGu8z'><img src={whatsapp}></img></a></li>
          <li className='socialIcon'><a href='https://instagram.com/prasad.bme/'><img src={instagram}></img></a></li>
          <li className='socialIcon'><a href='https://www.linkedin.com/in/prasad-satpute-7682b0148/'><img className='linkedinIcon' src={linkedin}></img></a></li>
          <li className='socialIcon'><a href='https://github.com/PrasadSatpute'><img src={github}></img></a></li>
          <li className='socialIcon'><a href='https://twitter.com/PRASADSATPUTE18'><img src={twiter}></img></a></li>
          <li className='socialIcon'><a href='#'><img src={facebook}></img></a></li>
        </ul>
      </p>
    </div>
  );
}

export default Footer;
