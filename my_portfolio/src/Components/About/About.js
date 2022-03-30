import './About.css'

import dot from '../IMG/dot.png'

function About() {
  return (
    <div className="AboutPage" id='About'>
      <div className='aboutInfo'>
        <h1><b>About Me</b></h1>
        <p>Hi Everyone, I am <b> Prasad Satpute </b> from <b>Nagpur,Maharashtra,India</b></p>
        <p>I done My Engineering in <b>Information Technology</b></p>
        <p>Full Stack Developer who loves to transform ideas into reality using code.</p>
        <p>Motivated developer with experience creating custom websites and backend Tech with</p>
        <p>HTML, CSS, JavaScript,</p>
        <p>Done some application in Java using Framework Netbeans</p>
        <p>Apart from coding, some other activities that I love to do!</p>
      </div>
      <div className='listActiviti'>
        <div>
          <p><img src={dot}></img>Travelling</p>
          <p><img src={dot}></img>Watching Movies</p>
          <p><img src={dot}></img>Playing Games</p>
          <p><img src={dot}></img>Reading Tech Blogs</p>
        </div>
      </div>
    </div>
  );
}

export default About;
