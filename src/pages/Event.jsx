import React from "react";
import "../Styles/Event.css";
import Event1 from '../Assests/Event1.jpg'
import Event2 from '../Assests/Event2.jpg'
import Event3 from '../Assests/Event3.jpg'
import Event4 from '../Assests/Event4.jpg'
import Event5 from '../Assests/Event5.jpg'
import Event6 from '../Assests/Event6.jpg'
import Event7 from '../Assests/Event7.jpg'
import Event8 from '../Assests/Event8.jpg'
function Event() {
  return (
    <>
      <h1 className="Event-Heading">
        Events
      </h1>
      <br />
      <br />
      <div class="container">
        <h1 class="head-tag">Events of Centre for River Studies</h1>
        <hr />
        <h2 class="head-tag">Event Details</h2>
        <p>
        National Science Day was celebrated on 22nd December 2023 remembering the greatest Mathematician of all times Srinivasa Ramanujan on his 136th Birth Anniversary.
        </p>
        <img class="img-active" src={Event1} alt="Event Image" />
        <br />
        <img class="img-active" src={Event2} alt="Event Image" />
        <br />
        <img class="img-active" src={Event3} alt="Event Image" />
      </div>
      <br />
      <br />
      <div class="container">
        <h1 class="head-tag">National Service Scheme(NSS) </h1>
        <hr />
        <h2 class="head-tag">Event Details</h2>
        <p>
        National Service Scheme(NSS) program has been organised in this students have participated-:
        </p>
        <img class="img-active" src={Event4} alt="Event Image" />
        <br />
        <img class="img-active" src={Event5} alt="Event Image" />
        <br />
        <img class="img-active" src={Event6} alt="Event Image" />
      </div>
      <br />
      <br />
      <div class="container">
        <h1 class="head-tag">1st Academic Advisory Committee</h1>
        <hr />
        <h2 class="head-tag">Event Details</h2>
        <p>
        1st Academic Advisory Committee of Centre for River Studies was organised on 30th March 2024 in which members of the committee has participated for the discussion on academic affairs of the centre.
        </p>
        <img class="img-active" src={Event7} alt="Event Image" />
        <br />
        <img class="img-active" src={Event8} alt="Event Image" />
      </div>
    </>
  );
}

export default Event;
