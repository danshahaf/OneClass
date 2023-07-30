import React from 'react';
import './SideMenu.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faListCheck, faBriefcase, faChess } from '@fortawesome/free-solid-svg-icons';

const SideMenu = ({ isOpen, mainContentHeight }) => {
  return (
    <div
      className={`side-menu ${isOpen ? 'open' : ''}`}
      style={{ height: mainContentHeight }}
    >
      {/* Add your side menu content here */}
      <ul className="menu-options">
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faCalendar} />
            Calendar
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faListCheck} />
            Planner
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faBriefcase} />
            Career
          </a>
        </li>
        <li>
          <a href="#">
            <FontAwesomeIcon icon={faChess} />
            Extracurriculars
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideMenu;
