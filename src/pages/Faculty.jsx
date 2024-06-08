import React from "react";
import "../Styles/Faculty.css";
import Staff from'../Assests/staff1.jpg'
// import Staff1 from'../Assests/staff2.jpg'
import Staff1 from'../Assests/staff3.jpg'
function Faculty() {
  return (
    <>
    <div className="Faculty-box">
        <h1>Faculty</h1>
        <img src={Staff} alt="Staff" />
        <h3>Dr. Saad Asghar Moeeni</h3>
        <h3>B.Tech, M.Tech, PhD in Civil (Water Resource Engineering), Ex flood modeler in Water Resource department, Govt. of Bihar</h3>
        <h3>Assistant Professor (Head of the Department)</h3>
        <h3>Centre for River Studies</h3>
      </div> 
     <div className="Faculty-box">
        <h1>Staff</h1>
        <img src={Staff1} alt="Staff" />
        <h3>Neha Kumari</h3>
        <h3>B.Com (Accounts Hons.)</h3>
        <h3>Assistant</h3>
        <h3>Centre for River Studies</h3>
      </div> 
    </>
  );
}

export default Faculty;
