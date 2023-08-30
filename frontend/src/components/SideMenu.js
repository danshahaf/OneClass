import React, { useState } from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faListCheck, faBriefcase, faChess } from '@fortawesome/free-solid-svg-icons';
import { faBook, faEnvelope, faUser, faCog, faUsers } from '@fortawesome/free-solid-svg-icons';


const SideMenu = ({ changePage }) => {
  const [currentPage, setCurrentPage] = useState('Classes');


  return (
    <div className='side-menu'>
      {/* Add your side menu content here */}
      <ul className="menu-options">
        <li>
          <a href="#" onClick={() => changePage('Classes')}>
            <FontAwesomeIcon icon={faBook} />
            Classes
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Opportuities')}>
            <FontAwesomeIcon icon={faBriefcase} />
            Opportunities
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Extracurriculars')}>
            <FontAwesomeIcon icon={faChess} />
            Extracurriculars
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Events')}>
            <FontAwesomeIcon icon={faChess} />
            Events
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Feed')}>
            <FontAwesomeIcon icon={faUsers} />
            Feed
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Dispatch')}>
            <FontAwesomeIcon icon={faEnvelope} />
            Dispatch
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Calendar')}>
            <FontAwesomeIcon icon={faCalendar} />
            Calendar
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Tasks')}>
            <FontAwesomeIcon icon={faListCheck} />
            Tasks
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Profile')}>
            <FontAwesomeIcon icon={faUser} />
            Profile
          </a>
        </li>
        <li>
          <a href="#" onClick={() => changePage('Settings')}>
            <FontAwesomeIcon icon={faCog} />
            Settings
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
