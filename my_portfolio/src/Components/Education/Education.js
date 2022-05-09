import './Education.css'

function Education() {
  return (
    <div className="EducationPage" id='Education'>
      <div className='EducationBox'>
        <div className='EduTitle'><h1><b>EDUCATION</b></h1></div>
        <div className='EduDetail'>
          <div className='EduDetailBox'>
            <h2>Post Graduation Deploma</h2>
            <h2>(C-DAC)</h2>
            <p>Sunbeam InfoTech</p>
            <p>Pune,Maharashtra</p>
            <p>2021</p>
          </div>
          <div className='EduDetailBox'>
            <h2>Graduation</h2>
            <h2>(B.E.)</h2>
            <p>JD College of Engineering and Management</p>
            <p>Nagpur,Maharashtra</p>
            <p>2018</p>
          </div>
          <div className='EduDetailBox'>
            <h2>HSC</h2>
            <h2>(12th)</h2>
            <p>Navpratibha Junior College</p>
            <p>Nagpur,Maharashtra</p>
            <p>2011</p>
          </div>
          <div className='EduDetailBox'>
            <h2>SSC</h2>
            <h2>(10th)</h2>
            <p>Navayug Vidhyalay</p>
            <p>Nagpur,Maharashtra</p>
            <p>2009</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
