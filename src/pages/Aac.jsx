import React from "react";
import '../Styles/Aac.css'
import one from '../Assests/AAC/1.jpg'
import two from '../Assests/AAC/2.jpg'
import three from '../Assests/AAC/3.jpg'
import four from '../Assests/AAC/4.jpg'
import five from '../Assests/AAC/5.jpg'
import six from '../Assests/AAC/6.jpg'
import seven from '../Assests/AAC/7.jpg'

function Aac() {
  return (
    <div class="card-container-People">
      <div class="card-people">
        <h1 style={{textAlign: 'center',marginTop: "20px",textShadow: "rgba(0, 0, 0, 0.3) 2px 2px 4px"}}>
          Academic Advisory Committee
        </h1>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={one} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Padam Shree Prof. R.K. Sinha</h4>
            <p>Ex.Vice -Chancellor, Nalanda Open University, Bihar & SMVD University, Katra, J & K.</p>
            <p>Email : rksinha.pu@gmail.com</p>
            <p>Phone: 9431073446</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={two} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.(Prof. )A.K. Ghosh</h4>
            <p>Ex. Director, Bihar State Pollution Control Board, Patna</p>
            <p>Email : ghosh51@hotmail.com</p>
            <p>Phone: 9334205809, 7544006310</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={three} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Vivekanand Singh</h4>
            <p>Professor, National Institute of Technology, Patna</p>
            <p>Email : vsingh@nitp.ac.in</p>
            <p>Phone: 7544006310</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={four} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr. Sanjay Kumar</h4>
            <p>Assistant Professor, National Institute of Technology, Patna</p>
            <p>Email : sanjay@nitp.ac.in</p>
            <p>Phone: 6206352354</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={five} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Janardan Jee</h4>
            <p>Ex- Director, ICAR , Institute of Makhana, Govt. of India</p>
            <p>Email : janardanjee07@gmail.com</p>
            <p>Phone: 9431623708</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={six} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Prof. Gopal Sharma</h4>
            <p>Director, Zoological Survey of India, Patna and Interim Director, Dolphin Research Centre, Patna</p>
            <p>Email : gopal-dolphinboy@rediffmail.com</p>
            <p>Phone: 9006718900, 9431221918</p>
          </div>
        </div>
        <div class="card-people-item">
          <div class="card-people-img">
            <img src={seven} alt="PeoplePage" />
          </div>
          <div class="card-people-text">
            <h4 style={{marginBottom: "10px"}}>Dr.(Prof.) Satyendra Kumar</h4>
            <p>Head, Department of Zoology, SNS College, Hajipur, BRA Bihar University, Muzaffarpur, Bihar</p>
            <p>Email : drsatyendra.hajipur@gmail.com</p>
            <p>Phone: 9123269907</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Aac;
