import './NavStyle.css'
import HomeICON from '../IMG/home.png'
import ProfileICON from '../IMG/profile.png'
import EducationICON from '../IMG/education.png'
import ResumeICON from '../IMG/resume.png'
import ContactICON from '../IMG/contact.png'

function Navbar() {
  return (
    <div className="Navbar">
      <ul>
          <li><a><img src={HomeICON}></img><h3>HOME</h3></a></li>
          <li><a><img src={ProfileICON}></img><h3>ABOUT</h3></a></li>
          <li><a><img src={EducationICON}></img><h3>EDUCATION</h3></a></li>
          <li><a><img src={ResumeICON}></img><h3>RESUME</h3></a></li>
          <li><a><img src={ContactICON}></img><h3>CONTACT</h3></a></li>
      </ul>
    </div>
  );
}

export default Navbar;
