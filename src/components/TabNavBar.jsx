import React from 'react';
import TabsWithDropdowns from './TabsWithDropdown';
import '../Styles/Tab.css';
import Institute from './Institute';
import Contact from '../pages/Contact';
import Msc from '../Assests/CourseCurriculumofCRS.pdf'

const TabNavBar = () => {
  const tabs = [
    {
      label: 'The Institute',
      content: <Institute/>,
      dropdownOptions: [
        { label: 'About Us', link: '/about' },
        { label: 'Aim And Objective', link: '/AimAndObjective' }
      ]
    },
    {
      label: 'Academic Program',
      dropdownOptions: [
        { label: 'Master of Science (MSc) in River Science and Management', link: Msc },
        { label: 'Certificate Programme in River Management.', link: '#' },
        { label: 'Doctor of Philosophy in River Science', link: '#' }
      ]
    },
    {
      label: 'People',
      dropdownOptions: [
        { label: 'Faculty And Staff', link: '/Faculty' },
        { label: 'Academic Advisory Committee', link: '/Aac' },
      ]
    },
    {
      label: 'Annual Report',
      dropdownOptions: [
        { label: 'Annual Report 2023', link: '#' },
        { label: 'Annual Report 2024', link: '#' },
      ]
    },
    {
      label: 'Activities',
      dropdownOptions: [
        { label: 'Events', link: '/Event' },
      ]
    },
    {
      label: 'eResources',
      dropdownOptions: [
        { label: 'UGC', link: 'https://www.ugc.gov.in/' },
        { label: 'NDA', link: 'https://www.nda.gov.in/' },
        { label: 'SWAYAM', link: 'https://www.swayam.gov.in/' },
        { label: 'SWAYAM PRABHA', link: 'https://www.swayamprabhay.gov.in/' },
        { label: 'EGYANKOSH', link: 'https://www.inflibnet.ac.in/' },
        { label: 'EPATHSHALA', link: 'https://epathshala.nic.in/' },
        { label: 'ISRO', link: 'https://www.isro.gov.in/' },
      ]
    },
    {
      label: 'Contact',
      content: <Contact/>,
      
    },
  ];

  return (
    <div className="TabNavBar">
      <TabsWithDropdowns tabs={tabs} />
    </div>
  );
};

export default TabNavBar;
