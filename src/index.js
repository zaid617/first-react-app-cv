import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


    function Hi() {
  return <div className = 'body'>
    
    <section className = 'section'>
        <img className = 'img'  src="https://i.pinimg.com/originals/47/6e/34/476e349199ec2d764f541017daa8a7ab.jpg" alt="logo"/>
        <h1 className = 'first'><b>Zaid Bin Tahir</b></h1>
        <br/><br/>
        <div className = 'info'>
        <h2 className = 'perso'><b><u>Personal Information</u></b></h2>
        <ul>
            <li><b><u> Father Name </u>:</b><br/> Muhammad Tahir</li>
            <li><b><u> D.O.B </u>:</b><br/> 16 Jan 2000</li>
            <li><b><u> Address </u>:</b><br/> 2/83 Shah Faial Colony No. 2 , Karachi.</li>
            <li><b><u> Contact </u>:</b><br/> 03461298500</li>
            <li><b><u> Email </u>:</b><br/> Zid6177@gmail.com</li>
        </ul>
    </div>
    </section>
    <aside>
        <h2 className = 'headings'>
            <u>Objective </u>:
        </h2>
        <p>Self-motivated team player seeking a position as a lead web developer with Next Generation Web Development
            where I can apply my advanced knowledge of web design with my leadership abilities to meet client needs and
            exceed their expectations.</p><hr/><hr/>

        <h2 className = 'headings'>
            <u>Education</u>:
        </h2>    
        <ul>
            <li>Secondary Education from Sindh Board</li>
            <li>Higher Education from P.E.C.H.S Gov. Degree Boy College</li>
            <li>Certificate in Web design and Android App</li>
            <li>Bachelors In Computer Science from Dawood University</li>
        </ul>
<hr/><hr/>
        <h2 className = 'headings'><u>
            Skills
        </u>:</h2>
        <ul>
            <li>Web Developer</li>
            <li>Communicating Skills</li>
            <li> Problem Solving</li>
            <li>Creative</li>
            <li>Typing skills</li>
            <li> Costomer Services</li>
        </ul><hr/><hr/>
        <div className = 'links'>
        <h2 className = 'headings'><u>Experience</u> :</h2>
        <b><u><b>Projects</b></u> :</b>
        <a href="https://github.com/zaid617" target="_blank" rel="noreferrer">Zid617 </a>
    </div>
    </aside>
  
  </div>
}

ReactDOM.render(<Hi/>, document.querySelector('#root'));
