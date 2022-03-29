import './HomeStyle.css'

import MyImg from '../IMG/MyImg.jpg'

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
          <h5>I am passionate about Frontend and Backend Technology<br></br> 
            to create awesome user experiences. Five years of experience<br></br>
            in <b>HTML+CSS+JS</b> to create awesome user interface.<br></br>
            Also Work in backend Technology like <b>JAVA</b></h5>
          </div>
      </div>
      <div className='socialLinkBox'><h1>SOCIAL</h1></div>
    </div>
  );
}

export default Home;
