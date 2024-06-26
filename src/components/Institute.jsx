import React from "react";
import "../Styles/Institute.css";
import Carousels from "./Carousels";
import ImportantBox from "./ImportantBox";
const BoxHeading = "News & Announcement";
const BoxHeadingSecond = "Important Links";
const Image = "https://akucgs.vercel.app/assets/new.gif";
const NewsAndAnnouncement = [
  {
    id: 0,
    NewsName: "Admission 2024",
    href: 'https://adms.akubihar.ac.in/',
  },
  {
    id: 1,
    NewsName: "SRS Prospectus 2024",
    href: '/PROSPECTUS2024.pdf',
  },
  {
    id: 2,
    NewsName: "Centres Notification 2024",
    href: "/Centres Notification.pdf",
  },
];

const ImportantLinks = [
  {
    id: 0,
    NewsName: "Admission Procedure 2024",
    href: "/Admission.pdf",
  },
  // {
  //   id: 1,
  //   NewsName: "DRC/BOS",
  //   href: "#",
  // },
  // {
  //   id: 2,
  //   NewsName: "Approved Syllabus of Courses offered By SGS",
  //   href: "#",
  // },
];

function Institute() {
  return (
    <>
      <div className="Institute-tab">
        <div className="Institute-tab-one">
          <Carousels />
          <ImportantBox
            NewsAndAnnouncement={NewsAndAnnouncement}
            Image={Image}
            BoxHeading={BoxHeading}
          />
        </div>
        <div className="Institute-tab-two">
          <ImportantBox
            NewsAndAnnouncement={ImportantLinks}
            Image={Image}
            BoxHeading={BoxHeadingSecond}
          />
          <div className="Institute-tab-content" style={{ marginLeft: '10px'}}>
            <h3 style={{textAlign: "justify"}}>
              The Aryabhatta Knowledge University was established by the Govt.
              of Bihar in its capital city Patna to promote the conventional as
              well as new frontiers of professional education and also to
              achieve excellence in teaching, research and extension work in
              these areas and other matters connected therewith.
            </h3>
            <br />
            <h3 style={{textAlign: "justify"}}>
              Knowledge creation and dissemination is one of the foremost
              objectives of the university. Accordingly, a Centre for River
              Studies (CRS) has been established against the backdrop of
              disturbances being faced by rivers which are dying due to
              pollution, over-extraction of water, emaciated tributaries and
              climatic changes all over the world in general and India in
              particular. Rivers have been virtually synonymous with
              civilizations. However, over a period of time, on-going and
              accelerating climate changes have decreased the flow of the many
              Rivers, stressing human society and river eco-systems that are
              dependent on the River's flow.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}

export default Institute;
